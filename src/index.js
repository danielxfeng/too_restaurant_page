import "./css/style.css";
import home from "./homepage";
import menu from "./menu";
import contact from "./contact";

let menuItems = document.querySelectorAll(".nav");
menuItems.forEach(
    item => {
        item.addEventListener("click", (e) => switchTab(e.target.id))
    }
);

let container = document.getElementById("container");
switchTab(0);

function switchTab(tab) {
    container.innerHTML = "";
    switch (tab) {
        case "nav_menu":
            container.appendChild(menu());
            break;
        case "nav_contact":
            container.appendChild(contact());
            break;
        default:
            container.appendChild(home());
    }
}