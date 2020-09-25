// Js for toggle Main Menu
const menuItems = document.getElementById("menuItems");
  menuItems.style.maxHeight = "0px";

function menutoggle(){
  if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "200px";
  }else{
    menuItems.style.maxHeight = "0px";
  }
}

// Js for toggle Form Login-Register
const loginForm = document.querySelector("#loginForm");
const regForm = document.querySelector("#regForm");
const indicator = document.querySelector("#indicator");

function register(){
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
}

function login(){
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
}

/*
const loginForm = document.getElementById("loginForm");
  loginForm.style.left = "0px";

function login(){
  if(loginForm.style.left == "0px"){
    loginForm.style.left = "-300px";
  }else{
    loginForm.style.left = "0px";
  }
}
*/