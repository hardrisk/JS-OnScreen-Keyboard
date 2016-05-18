"use strict";

var keyboard = new Keyboard("basic");
var hostEl = document.querySelector(".keyboard-host");
var inputEl = document.querySelector(".input-name");

// Generate keyboard HTML, bind events, insert them to given element
keyboard.placeIn(hostEl);

// Keyboard allows hooking functions to execute for special keys
// e.g.
// keyboard.customFunc["tab"] = function switchInput(keyInfo){
// ...code
// }

// Make keyboard's events update input el's content
keyboard.focus(inputEl);

// keyboard.destroy();
