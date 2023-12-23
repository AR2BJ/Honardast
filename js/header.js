let header = document.querySelector(".header");
let menu_bar = document.querySelector(".menu_bar");
let item_link = document.querySelectorAll(".item_link");
let icon_header = document.querySelector(".icon_header");
let icon_search = document.querySelector(".icon_1");
let div_search = document.querySelector(".div_search");
let bars = document.querySelector(".bars");
let main = document.querySelector(".main");


item_link.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        e.target.previousElementSibling.style = "width: 100%";
    });
});

item_link.forEach((item) => {
    item.addEventListener("mouseleave", (e) => {
        e.target.previousElementSibling.removeAttribute("style");
    });
});

bars.addEventListener("click", () => {
    if (menu_bar.hasAttribute("style") == false) {
        menu_bar.style = "height: 100%; padding: 144px 0";
        icon_header.style = "visibility: visible; opacity: 1;";
        main.style = "margin-top: 345px";
    }
    else {
        menu_bar.removeAttribute("style");
        icon_header.removeAttribute("style");
        main.removeAttribute("style");
    }
});

if (screen.width <= 1024) {
    icon_search.addEventListener("click", () => {
        if (div_search.hasAttribute("style") == false) {
            div_search.style = "visibility: visible; opacity: 1;";
        }
        else {
            div_search.removeAttribute("style");
        }
    });
}
else {
    icon_search.addEventListener("click", () => {
        if (div_search.hasAttribute("style") == false) {
            div_search.style = "visibility: visible; opacity: 1;";
            menu_bar.style = "grid-column: 3 / 8";
            icon_header.style = "grid-column: 11 / 13";
        }
        else {
            div_search.removeAttribute("style");
            menu_bar.removeAttribute("style");
            icon_header.removeAttribute("style");
        }
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.style = "background-color: #143D4F !important;";
    }
    else {
        header.removeAttribute("style");
    }
});

function aboutContentClick() {
    if (screen.width == 1440) {
        item_link[2].href = "#";
        window.scrollTo(0, 1800);
    }
    else if (screen.width == 1024) {
        item_link[2].href = "#";
        window.scrollTo(0, 1824);
    }
    else if (screen.width == 768) {
        item_link[2].href = "#";
        window.scrollTo(0, 2202);
    }
}