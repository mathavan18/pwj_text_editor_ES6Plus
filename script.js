//TODO: Convert all functions and any other possible elements to ES6

/**
 * Update the output text as you type in the textarea
 */
let updateText = () => {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

/**
 * Toggle the bold class for the output text
 */
let makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

/**
 * Toggle the italic class for the output text
 */
let makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

/**
 * Toggle the underline class for the output text
 */
let makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let output = document.getElementById("text-output");
  if (output.classList.contains("underline")) {
    output.classList.remove("underline");
  } else {
    output.classList.add("underline");
  }
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 */
let alignText = (elem, alignType) => {
  document.getElementById("text-output").style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName("align");

  for (let button of alignButtons) {
    button.classList.remove("active");
  }

  elem.classList.toggle("active");
};
