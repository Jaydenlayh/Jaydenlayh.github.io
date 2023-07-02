// CODE COMMENTS MADE VIA CHATGPT. 

// Get the canvas element from the HTML document
const canvas = document.querySelector('canvas');

// Get the 2D rendering context for the canvas
const c = canvas.getContext('2d');


const playerimage = new Image();
playerimage.src = "js/sssprites/player.png"
const playerimageflip = new Image();
playerimageflip.src = "js/sssprites/playerflipped.png"
const backgroundimg = new Image();
backgroundimg.src = "js/sssprites/background.png"
const imagecount = 3
var imageloaded = 0
// Set the width and height of the canvas
canvas.width = 1040;
canvas.height = 576;

// Define the value of gravity
const gravity = 0.5;

const leftside = 0
const rightside = canvas.width

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


function between(x, min, max) {
    return x >= min && x <= max;
  }

// Define the Sprite class
class Sprite {
    constructor({ position, velocity, lastkey}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 100;
        this.width = 50;
        this.lastkey = lastkey
        this.img = playerimage
        this.imgflip = playerimageflip
        this.spritekey = 1
        // Define the attack box for the sprite

        this.attackbox = {
            x: this.position.x,
            y: this.position.y,
            width: this.width + (this.width / 2),
            height: 50
        };
    }

    // Draw the sprite and its attack box on the canvas
// Draw the sprite and its attack box on the canvas
    draw() {
        c.fillStyle = "white";
        if (this.lastkey == 'd') {
            this.attackbox = {
                x: this.position.x,
                y: this.position.y,
                width: this.width + (this.width / 2),
                height: 50
            };
            c.fillRect(this.attackbox.x, this.attackbox.y, this.attackbox.width, this.attackbox.height);
        } else if (this.lastkey == 'a') {
            this.attackbox = {
                x: this.position.x - (this.width / 2),
                y: this.position.y,
                width: this.width + (this.width / 2),
                height: 50
            };
            c.fillRect(this.attackbox.x, this.attackbox.y, this.attackbox.width, this.attackbox.height);
        }
        if (this.spritekey == 1) {
            if (this.lastkey == "d") {
                c.drawImage(this.img, 1, 1, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            } else {
                c.drawImage(this.imgflip, 1, 1, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            };
            
            this.spritekey += 1
        } else if (this.spritekey == 2) {
            if (this.lastkey == "d") {
                c.drawImage(this.img, 51, 1, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            } else {
                c.drawImage(this.imgflip, 51, 1, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            };
            this.spritekey += 1
        } else if (this.spritekey == 3) {
            if (this.lastkey == "d") {
                c.drawImage(this.img, 101, 1, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            } else {
                c.drawImage(this.imgflip, 101, 1, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            };
            this.spritekey = 1
        }

    }


    // Update the sprite's position and velocity
    update() {
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y;

        // Apply gravity to the sprite's vertical velocity
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity;
        }

        // Keep the sprite within the horizontal boundaries of the canvas
        if (this.position.x + this.width >= canvas.width) {
            this.position.x = canvas.width - this.width - 1
            this.velocity.x = 0
        }
        if (this.position.x <= 0) {
            this.position.x = 1
            this.velocity.x = 0
        }
    }
}

// Define the zombie class
class Zombie {
    constructor({ position, velocity}) {
        this.position = position;
        this.velocity = velocity;
        this.height = 100;
        this.width = 50;
        this.movdirect = "l"
        // Define the attack box for the sprite

        this.attackbox = {
            x: this.position.x,
            y: this.position.y,
            width: this.width + (this.width / 2),
            height: 50
        };
    }

    // Draw the sprite and its attack box on the canvas
    draw() {
        c.fillStyle = "green";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        c.fillStyle = "white";
        if (this.movdirect == 'r') {
            this.attackbox = {
                x: this.position.x,
                y: this.position.y,
                width: this.width + (this.width / 2),
                height: 50
            };
            c.fillRect(this.attackbox.x, this.attackbox.y, this.attackbox.width, this.attackbox.height);
        } else if (this.movdirect == 'l') {
            this.attackbox = {
                x: this.position.x - (this.width / 2),
                y: this.position.y,
                width: this.width + (this.width / 2),
                height: 50
            };
            c.fillRect(this.attackbox.x, this.attackbox.y, this.attackbox.width, this.attackbox.height);
        }
    }

    // Update the sprite's position and velocity
    update() {
        this.draw();
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y;
        console.log(this.velocity.x)
        // Apply gravity to the sprite's vertical velocity
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity;
        }

        // Keep the sprite within the horizontal boundaries of the canvas
        if (this.position.x + this.width >= canvas.width) {
            this.position.x = canvas.width - this.width - 1
            this.velocity.x = 0
        }
        if (this.position.x <= 0) {
            this.position.x = 1
            this.velocity.x = 0
        }

        if (player.position.x < this.position.x) {
            if (this.velocity.x > 0) {
                this.velocity.x -= .05
            } else {
                this.velocity.x -= .01
            }
            this.movdirect = 'l'
        } else if (player.position.x > this.position.x) {
            if (this.velocity.x < 0) {
                this.velocity.x += .05
            } else {
                this.velocity.x += .01
            }
            this.movdirect = 'r'
        }
    }
    gotorandpos() {
        player.position = getrandompos()
    }
}




// Create a new instance of the Sprite class for the player
const player = new Sprite({
    position: {
        x: (1040 / 2) - 100,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    lastkey: 'd'
});

// Define an object to track the state of keyboard keys
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    e: {
        pressed: false,
        pressable: true
    }
}


// The main animation loop
function animate() {
    // Request the next animation frame
    window.requestAnimationFrame(animate);

    // Clear the canvas
    c.clearRect(0, 0, canvas.width, canvas.height)

    // Draw the background
    c.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height)

    // Update the player sprite
    player.update();

    // Handle player movement based on keyboard input
    if (keys.a.pressed && player.lastkey == 'a') {
        player.velocity.x += -1
        if (player.velocity.x < -10) {
            player.velocity.x = -10
        }
    } else if (keys.d.pressed && player.lastkey == 'd') {
        player.velocity.x += 1
        if (player.velocity.x > 10) {
            player.velocity.x = 10
        }
    } else if (!(keys.a.pressed && keys.d.pressed)) {
        if (player.velocity.x < 0) {
            player.velocity.x += .5
        } else if (player.velocity.x > 0) {
            player.velocity.x -= .5
        }
    }

    if (keys.e.pressed && keys.e.pressable) {
        handleCollisions()
        keys.e.pressable = false
    }

    // Handle player jumping
    if (player.position.y + player.height + player.velocity.y >= canvas.height && keys.w.pressed) {
        player.velocity.y -= 20
    }



    zombies.forEach((zombie) => {
        zombie.update();
    });
}

const zombies = []

function createZombie(side) {
    if (zombies.length == 3) {
        return
    }
    const zombie = new Zombie({
        position: {
            x: getRandomInt(0, canvas.width),
            y: 0
        },
        velocity: {
            x: 0,
            y: 0
        }
    });
    zombies.push(zombie);
}

function killZombie(index) {
    zombies.splice(index, 1);
}

// Function to handle collision detection and killing zombies
function handleCollisions() {
    zombies.forEach((zombie) => {
      if (
        player.attackbox.x < zombie.position.x + zombie.width &&
        player.attackbox.x + player.attackbox.width > zombie.position.x &&
        player.attackbox.y < zombie.position.y + zombie.height && // Fix the condition here
        player.attackbox.y + player.attackbox.height > zombie.position.y
      ) {
        killZombie(zombies.indexOf(zombie))
      }
    });
  }

console.log("checking load")

playerimage.onload = function(){
  imageloaded += 1
  console.log("checking load1")
  if(imageloaded == imagecount){
      allLoaded();
  }
}

playerimageflip.onload = function(){
  imageloaded += 1
  console.log("checking load2")
  if(imageloaded == imagecount){
      allLoaded();
  }
}

backgroundimg.onload = function(){
    imageloaded += 1
    console.log("checking load3")
    if(imageloaded == imagecount){
        allLoaded();
    }
  }
  

// Start the animation loop
function allLoaded() {
    animate();

    setInterval(createZombie, 2000);
};


// Event listener for keydown events
window.addEventListener('keydown', () => {
    // Update the state of the corresponding key in the keys object
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            player.lastkey = 'd'
            break
        case 'a':
            keys.a.pressed = true
            player.lastkey = 'a'
            break
        case 'w':
            keys.w.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'e':
            keys.e.pressed = true
            
    }
    console.log(event.key)
})

// Event listener for keyup events
window.addEventListener('keyup', () => {
    // Update the state of the corresponding key in the keys object
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case "e":
            keys.e.pressed = false
            keys.e.pressable = true

    }
    console.log(event.key)
})






