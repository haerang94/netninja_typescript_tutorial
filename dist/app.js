"use strict";
var button = document.querySelector("button");
function clickHandler(message) {
    console.log("clicked! " + message);
}
button.addEventListener("click", clickHandler.bind(null, "welcome"));
