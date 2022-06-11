alert("Hello Graham");

// const h1 = document.createElement("h1");
// h1.innerHTML = "Shopping App";

const root = document.getElementById("root");

//

const menu = ["Home", "About", "Contact", "Products", "Login"];

// Nav Function
function nav(menu) {
  const navBar = document.createElement("nav");
  for (let item in menu) {
    const a = document.createElement("a");
    a.innerHTML = menu[item];
    navBar.appendChild(a);
  }

  return navBar;
}
root.appendChild(nav(menu));
