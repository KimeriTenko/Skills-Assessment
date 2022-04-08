// Obtain the img element, and assign it to the image variable
let img = document.getElementById("pet") 
  

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable

 
  let changeSize = document.querySelector("button");

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height = "300px") {
    image.style.height = "25px"
    image.style.width = "25px"
  }
  else {
    image.style.height = "300px" 
    image.style.width = "25px"
  }
})