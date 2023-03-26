const node = document.getElementById("node");

var layers = [
  ["=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "="],
  ["=", "-", "-", "-", "-", "-", "-", "-", "=", "-", "-", "-", "-", "="],
  ["=", "-", "~", "-", "+", "-", "-", "-", "-", "-", "-", "-", "-", "="],
  ["=", "-", "-", "-", "-", "-", "-", "-", "=", "-", "-", "-", "-", "="],
  ["=", "=", "=", "=", "=", "-", "=", "=", "=", "-", "-", "-", "-", "="],
  ["=", "-", "-", "-", "-", "-", "-", "-", "=", "-", "-", "-", "-", "="],
  ["=", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "="],
  ["=", "-", "-", "-", "-", "-", "-", "-", "=", "-", "-", "-", "-", "="],
  ["=", "-", "-", "-", "-", "-", "-", "-", "=", "-", "-", "-", "-", "="],
  ["=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "=", "="]
];

var score = 0;


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function* enumerate (it, start = 0)
{ let i = start
  for (const x of it)
    yield [i++, x]
}

function spawnobj() {
  let notplaced = true;
  let length = layers[0].length;
  let width = layers.length;
  while (notplaced == true) {
    let placelen = Math.floor(Math.random() * length);
    let placewid = Math.floor(Math.random() * width);
    if (layers[placewid][placelen] == "-") {
      layers[placewid][placelen] = "~"
      notplaced = false
    };
  }



}

function topbar() {
  if (!(score.toString().length == 4)) {
    let scorestring = "";
    for (let i = 0 + score.toString().length; i < 4; i++) {
      scorestring += "-"
    }
    scorestring += score.toString()
    var testkey = document.createElement("p");
    const keynode = document.createTextNode(scorestring);
    testkey.appendChild(keynode);
    testkey.style.color = "green";
    testkey.style.fontFamily = '"console", monospace'
    document.getElementById("divide").appendChild(testkey);
  };
}




node.addEventListener('keydown', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
    var childDivs = document.getElementById('divide');
    childDivs.innerHTML = "";
    if (key == "w") {
      console.log(key);
      for (var [index1, arse] of enumerate(layers)) {
        console.log(arse);
        // THE FUCKING MOVEMENT UP!!!!!!!!!!!!!!!!!!!
        for (var [index2, stringkey] of enumerate(arse)) {
          if (stringkey == "+") {
            if (layers[(index1 - 1)][index2] == "=") {
            } else {
              if (layers[(index1 - 1)][index2] == "~") {
                score += 1
                spawnobj();
              };
              layers[(index1 - 1)][index2] = "+"
              layers[index1][index2] = "-"
            };
          };
        };
      };
    } else if (key == "s") {
      console.log(key);
      let movecheck = true
      for (var [index1, arse] of enumerate(layers)) {
        console.log(arse);
        for (var [index2, stringkey] of enumerate(arse)) {
          if (movecheck == true) {
            if (stringkey == "+") {
              if (layers[(index1 + 1)][index2] == "=") {
              } else {
                if (layers[(index1 + 1)][index2] == "~") {
                  score += 1
                  spawnobj();
                };
                layers[(index1 + 1)][index2] = "+"
                layers[index1][index2] = "-"
                movecheck = false
              };
            };
          };
        };
      };

    } else if (key == "a") {
      let movecheck = true
      for (var [index1, arse] of enumerate(layers)) {
        console.log(arse);
        for (var [index2, stringkey] of enumerate(arse)) {
          if (movecheck == true) {
            if (stringkey == "+") {
              if (layers[index1][index2 - 1] == "=") {
              } else {
                if (layers[(index1)][index2 - 1] == "~") {
                  score += 1
                  spawnobj();
                };
                layers[index1][index2 - 1] = "+"
                layers[index1][index2] = "-"
                movecheck = false
              };
            };
          };
        };
      };
    } else if (key == "d") {
      console.log(key);
      let movecheck = true
      for (var [index1, arse] of enumerate(layers)) {
        console.log(arse);
        for (var [index2, stringkey] of enumerate(arse)) {
          if (movecheck == true) {
            if (stringkey == "+") {
              if (layers[index1][index2 + 1] == "=") {
              } else {
                if (layers[(index1)][index2 + 1] == "~") {
                  score += 1
                  spawnobj();
                };
                layers[index1][index2 + 1] = "+"
                layers[index1][index2] = "-"
                movecheck = false
              };
            };
          };
        };
      };
    };
    topbar();
    for (var [index1, arse] of enumerate(layers)) {
      let final = ""
      for (var [index2, stringkey] of enumerate(arse)) {
        final += stringkey
      };
      var testkey = document.createElement("p");
      const keynode = document.createTextNode(final);
      testkey.appendChild(keynode);
      testkey.style.color = "red";
      testkey.style.fontFamily = 'monospace, monospace'
      document.getElementById("divide").appendChild(testkey);
    };
});
