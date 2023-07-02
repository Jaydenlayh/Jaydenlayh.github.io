fetch('./vis-works.json').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
  for (var key in data) {
    console.log(key, data[key].title);
    const divide = document.createElement("div")
    divide.style.backgroundColor = "#272727"
    const post = document.createElement("a");
    const linkText = document.createTextNode(data[key].title);
    post.appendChild(linkText);
    post.style.color = "white"
    post.href = data[key].ref
    console.log("image" in data[key]);
    if ("image" in data[key]) {
      const image = document.createElement("img");
      image.src = data[key].image
      image.style.padding = "10px"
      image.style.maxWidth = "200px"
      image.style.maxHeight = "100px"
      divide.appendChild(image)
    }
    post.class = "blogpost"
    divide.appendChild(post)
    divide.style.alignItems = "center"
    divide.style.justifyContent = "center"
    divide.style.display = "flex"
    divide.style.flexWrap = "nowrap"
    divide.style.width = "1000px"
    document.getElementById("blogs").appendChild(divide)
    document.getElementById("blogs").appendChild(document.createElement("br"));
  }
}).catch(err => {
  // Do something for an error here
});
