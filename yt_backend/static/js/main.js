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

  if (menu.style.display == "none") {
    menu.style.display = "flex";
  } else{
    menu.style.display = "none";
  } 
}

// landing download open list
function openList1() {
  let list = document.querySelector(".quality-download");

  if (list.style.display == "none") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
}

function openList2() {
  let list = document.querySelector(".quality-audio");

  if (list.style.display == "none") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
}

function openList3() {
  let list = document.querySelector(".quality-translate");

  if (list.style.display === "none") {
    list.style.display = "flex";
  } else {
    list.style.display = "none";
  }
}

// about questions plus
function plusOpen() {
  let arrow = document.getElementById("plus");
  let myP = document.getElementById("my-p");

  if (myP.style.display == "none") {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  }
}
function plusOpen1() {
  let arrow = document.getElementById("plus1");
  let myP = document.getElementById("my-p1");

  if (myP.style.display == "none") {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  }
}
function plusOpen2() {
  let arrow = document.getElementById("plus2");
  let myP = document.getElementById("my-p2");

  if (myP.style.display == "none") {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  }
}
function plusOpen3() {
  let arrow = document.getElementById("plus3");
  let myP = document.getElementById("my-p3");

  if (myP.style.display == "none") {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  }
}
function plusOpen4() {
  let arrow = document.getElementById("plus4");
  let myP = document.getElementById("my-p4");

  if (myP.style.display == "none") {
    myP.style.display = "block";
    arrow.style.cssText =
      "transform: rotate(45deg); transition: var(--main-transition);";
  } else {
    myP.style.display = "none";
    arrow.style.cssText =
      "transform: rotate(0deg); transition: var(--main-transition);";
  }
}
