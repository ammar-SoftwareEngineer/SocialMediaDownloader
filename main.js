// theme page
function darkMode() {
  let element = document.body;
  element.className = "dark-mode";
}

function lightMode() {
  let element = document.body;
  element.className = "light-mode";
}

// open menu page
function openMenu() {
  let menu = document.querySelector(".main-nav");

  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// landing download open list
function openList1() {
  let list = document.querySelector(".quality-download");

  if (list.style.display == "flex") {
    list.style.display = "none";
  } else {
    list.style.display = "flex";
  }
}

function openList2() {
  let list = document.querySelector(".quality-audio");

  if (list.style.display == "flex") {
    list.style.display = "none";
  } else {
    list.style.display = "flex";
  }
}

function openList3() {
  let list = document.querySelector(".quality-translate");

  if (list.style.display == "flex") {
    list.style.display = "none";
  } else {
    list.style.display = "flex";
  }
}

// about questions plus
function plusOpen() {
  let arrow = document.getElementById("plus");
  let myP = document.getElementById("my-p");

  if (myP.style.display == "block") {
    myP.style.display = "none";

    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  }
}
function plusOpen1() {
  let arrow = document.getElementById("plus1");
  let myP = document.getElementById("my-p1");

  if (myP.style.display == "block") {
    myP.style.display = "none";

    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  }
}
function plusOpen2() {
  let arrow = document.getElementById("plus2");
  let myP = document.getElementById("my-p2");

  if (myP.style.display == "block") {
    myP.style.display = "none";

    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  }
}
function plusOpen3() {
  let arrow = document.getElementById("plus3");
  let myP = document.getElementById("my-p3");

  if (myP.style.display == "block") {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  }
}
function plusOpen4() {
  let arrow = document.getElementById("plus4");
  let myP = document.getElementById("my-p4");

  if (myP.style.display == "block") {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  }
}
