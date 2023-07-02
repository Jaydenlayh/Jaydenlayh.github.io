// Get the canvas element from the HTML document
const canvas = document.querySelector('canvas');

// Get the 2D rendering context for the canvas
const c = canvas.getContext('2d', {imageSmoothingEnabled: false});

const playerimage = new Image();
playerimage.src = "js/topdownsprites/player.png";
const imagecount = 1;
var imageloaded = 0;

// Set the width and height of the canvas
canvas.width = 1040;
canvas.height = 576;

var mousePos = { x: 0, y: 0 };
var angle = 0;
const leftside = 0;
const rightside = canvas.width;
const topside = 0;
const bottomside = canvas.height;
var zombies = []

const keys = {
    a: { pressed: false },
    d: { pressed: false },
    w: { pressed: false },
    s: { pressed: false },
    e: { pressed: false, pressable: true }
  };



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getrandompos() {
    return {
        x: getRandomInt(0, canvas.width),
        y: getRandomInt(0, canvas.height)
    }
}

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function between(x, min, max) {
  return x >= min && x <= max;
}

class Sprite {
  constructor({ position, velocity, lastkey}) {
    this.position = position;
    this.velocity = velocity;
    this.height = 11;
    this.width = 11;
    this.lastkey = lastkey;
    this.img = playerimage;
    this.animkey = 0;
    this.center = { x: 6, y: 6};
    this.mousepos = mousePos
    this.animation
  }

  animatekey() {
    if (this.animkey >= 5) {
        this.animkey = 0
    } else {
        this.animkey += 1
    } 
    console.log("animated")
  }

  // Draw the sprite and its attack box on the canvas
  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, 11,11)
    const angle = Math.atan2(this.mousepos.y - (this.position.y + 5), this.mousepos.x - (this.position.x + 5));
    if (keys.d.pressed || keys.a.pressed || keys.w.pressed || keys.s.pressed) {
        if (typeof this.animation == 'undefined' || this.animation == 0) {
            this.animation = setInterval(() => {
                this.animatekey()
            }, 25);
        }
    }


    if (!(keys.d.pressed || keys.a.pressed || keys.w.pressed || keys.s.pressed)) {
        if (typeof this.animatekey !== 'undefined') {
            clearInterval(this.animation)
            this.animation = 0
        }
        this.animkey = 6
    }   
    c.save();
    c.translate(this.position.x + 5, this.position.y + 5);
    c.rotate(angle + Math.PI / 2);  // Subtract Math.PI / 2 to rotate the image 90 degrees counter-clockwise
    c.scale(5, 5)
    c.drawImage(
      playerimage,
      0 + (11 * this.animkey),
      0,
      11,
      11,
      -this.center.x,
      -this.center.y,
      11,
      11
    );
    c.restore();
  }
  
  
  

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Keep the sprite within the horizontal boundaries of the canvas
    if (this.position.x + this.width >= canvas.width) {
      this.position.x = canvas.width - this.width;
      this.velocity.x = 0;
    }
    if (this.position.x <= 0) {
      this.position.x = 1;
      this.velocity.x = 0;
    }
    // Keep the sprite within the vertical boundaries of the canvas
    if (this.position.y + this.height >= canvas.height) {
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
    }
    if (this.position.y <= 0) {
      this.position.y = 1;
      this.velocity.y = 0;
    }
    // Up and down movement
    if (keys.w.pressed) {
        if (this.velocity.y >= 0) {
            this.velocity.y = 0
        }
        if (this.velocity.y <= -10) {
            this.velocity.y = -10
        } else {
            this.velocity.y -= 1
        }
    }
    if (keys.s.pressed) {
        if (this.velocity.y <= 0) {
            this.velocity.y = 0
        }
        if (this.velocity.y >= 10) {
            this.velocity.y = 10
        } else {
            this.velocity.y += 1
        }
    }
    // left and right
    if (keys.a.pressed) {
        if (this.velocity.x >= 0) {
            this.velocity.x = 0
        }
        if (this.velocity.x <= -10) {
            this.velocity.x = -10
        } else {
            this.velocity.x -= 1
        }
    }
    if (keys.d.pressed) {
        if (this.velocity.x <= 0) {
            this.velocity.x = 0
        }
        if (this.velocity.x >= 10) {
            this.velocity.x = 10
        } else {
            this.velocity.x += 1
        }
    }
    //Natural slowdown
    if (!(keys.w.pressed || keys.s.pressed)) {
        if (player.velocity.y < 0) {
            player.velocity.y += .5
        } else if (player.velocity.y > 0) {
            player.velocity.y -= .5
        }
    }
    if (!(keys.d.pressed || keys.a.pressed)) {
        if (player.velocity.x < 0) {
            player.velocity.x += .5
        } else if (player.velocity.x > 0) {
            player.velocity.x -= .5
        }
    }

  }
}
class Zombie {
    constructor({ position, velocity, lastkey}) {
      this.position = position;
      this.velocity = velocity;
      this.height = 11;
      this.width = 11;
      this.lastkey = lastkey;
      this.img = playerimage;
      this.animkey = 1;
      this.center = { x: 6, y: 6 };
    }
  
    // Draw the sprite and its attack box on the canvas
    draw() {
      const angle = Math.atan2(this.mousepos.y - this.position.y, this.mousepos.x - this.position.x);
      centerDraw(playerimage, this.position.x, this.position.y, 2, angle, this.center);
    }
    
    
  
    update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
  
      // Keep the sprite within the horizontal boundaries of the canvas
      if (this.position.x + this.width >= canvas.width) {
        this.position.x = canvas.width - this.width;
        this.velocity.x = 0;
      }
      if (this.position.x <= 0) {
        this.position.x = 1;
        this.velocity.x = 0;
      }
      // Keep the sprite within the vertical boundaries of the canvas
      if (this.position.y + this.height >= canvas.height) {
        this.position.y = canvas.height - this.height;
        this.velocity.y = 0;
      }
      if (this.position.y <= 0) {
        this.position.y = 1;
        this.velocity.y = 0;
      }
    }
}

function animate() {
    // Request the next animation frame
    window.requestAnimationFrame(animate);

    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "black";
    // Draw the background
    c.fillRect(0, 0, canvas.width, canvas.height);
    if (keys.e.pressed && keys.e.pressable) {
      player.position = mousePos
      keys.e.pressable = false
    } 
    if (!(keys.e.pressed)) {
      keys.e.pressable = true
    }

    

    // Update the player sprite
    player.mousepos = mousePos;
    player.update();
    for (zombie in zombies) {
      zombie.update()
    }
}



const player = new Sprite({
  position: {
    x: (canvas.width / 2) - 5,
    y: (canvas.height / 2) - 5
  },
  velocity: {
    x: 0,
    y: 0
  },
  lastkey: 'd',
  mousepos: { x: 0, y: 0 }
});


console.log("checking load");

playerimage.onload = function () {
  imageloaded += 1;
  console.log("checking load1");
  if (imageloaded === imagecount) {
    allLoaded();
  }
};

function getMousePos(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width; // Scale X coordinate
  const scaleY = canvas.height / rect.height; // Scale Y coordinate

  // Calculate mouse position relative to the canvas
  const mouseX = (event.clientX - rect.left) * scaleX;
  const mouseY = (event.clientY - rect.top) * scaleY;

  return { x: mouseX, y: mouseY };
}

canvas.addEventListener('mousemove', function (event) {
  mousePos = getMousePos(canvas, event);
  player.mousepos = mousePos;
  console.log('Mouse position:', mousePos.x, ',', mousePos.y);
});

function summomZombie() {

}

function allLoaded() {
  animate();
}


// KEY PRESS CHECKER.
window.addEventListener('keydown', (event) => {
  // Update the state of the corresponding key in the keys object
  switch (event.key) {
    case 'd':
      keys.d.pressed = true;
      player.lastkey = 'd';
      break;
    case 'a':
      keys.a.pressed = true;
      player.lastkey = 'a';
      break;
    case 'w':
      keys.w.pressed = true;
      break;
    case 's':
      keys.s.pressed = true;
      break;
    case 'e':
      keys.e.pressed = true;
  }
  console.log(event.key);
});

window.addEventListener('keyup', (event) => {
  // Update the state of the corresponding key in the keys object
  switch (event.key) {
    case 'd':
      keys.d.pressed = false;
      break;
    case 'a':
      keys.a.pressed = false;
      break;
    case 'w':
      keys.w.pressed = false;
      break;
    case 's':
      keys.s.pressed = false;
      break;
    case "e":
      keys.e.pressed = false;
      keys.e.pressable = true;
  }
  console.log(event.key);
});
