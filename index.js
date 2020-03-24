// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the current class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");

    // If there's no current class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" current", "");
    }

    // Add the current class to the current/clicked button
    this.className += " current";
  });
}