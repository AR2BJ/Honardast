let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");
let img_3 = document.querySelector(".img_3");
let img_4 = document.querySelector(".img_4");
let btn_div = document.querySelector(".btn_div");
let btn_slide = document.querySelectorAll(".btn_slide");
let btn_next = document.querySelector(".btn_next");
let btn_previous = document.querySelector(".btn_previous");

function style(element_1, visibility, value, element_2, index, color) {
    element_1.style = `visibility: ${visibility}; opacity: ${value};`;
    element_2.children[index].style = `background-color: ${color};`;
}

style(img_1, "visible", "1", btn_div, 3, "#fff");
style(img_2, "hidden", "0", btn_div, 2, "transparent");
style(img_3, "hidden", "0", btn_div, 1, "transparent");
style(img_4, "hidden", "0", btn_div, 0, "transparent");

btn_next.addEventListener("click", () => {
    if (img_1.style.visibility == "visible" && img_1.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "visible", "1", btn_div, 2, "#fff");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
    else if (img_2.style.visibility == "visible" && img_2.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "visible", "1", btn_div, 1, "#fff");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
    else if (img_3.style.visibility == "visible" && img_3.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "visible", "1", btn_div, 0, "#fff");
    }
    else {
        style(img_1, "visible", "1", btn_div, 3, "#fff");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
});

btn_previous.addEventListener("click", () => {
    if (img_1.style.visibility == "visible" && img_1.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "visible", "1", btn_div, 0, "#fff");
    }
    else if (img_2.style.visibility == "visible" && img_2.style.opacity == "1") {
        style(img_1, "visible", "1", btn_div, 3, "#fff");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
    else if (img_3.style.visibility == "visible" && img_3.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "visible", "1", btn_div, 2, "#fff");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
    else {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "visible", "1", btn_div, 1, "#fff");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
});

btn_slide.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (e.target.classList[2] == "btn_4") {
            style(img_1, "visible", "1", btn_div, 3, "#fff");
            style(img_2, "hidden", "0", btn_div, 2, "transparent");
            style(img_3, "hidden", "0", btn_div, 1, "transparent");
            style(img_4, "hidden", "0", btn_div, 0, "transparent");
        }
        else if (e.target.classList[2] == "btn_3") {
            style(img_1, "hidden", "0", btn_div, 3, "transparent");
            style(img_2, "visible", "1", btn_div, 2, "#fff");
            style(img_3, "hidden", "0", btn_div, 1, "transparent");
            style(img_4, "hidden", "0", btn_div, 0, "transparent");
        }
        else if (e.target.classList[2] == "btn_2") {
            style(img_1, "hidden", "0", btn_div, 3, "transparent");
            style(img_2, "hidden", "0", btn_div, 2, "transparent");
            style(img_3, "visible", "1", btn_div, 1, "#fff");
            style(img_4, "hidden", "0", btn_div, 0, "transparent");
        }
        else {
            style(img_1, "hidden", "0", btn_div, 3, "transparent");
            style(img_2, "hidden", "0", btn_div, 2, "transparent");
            style(img_3, "hidden", "0", btn_div, 1, "transparent");
            style(img_4, "visible", "1", btn_div, 0, "#fff");
        }
    });
});

setInterval(() => {
    if (img_1.style.visibility == "visible" && img_1.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "visible", "1", btn_div, 2, "#fff");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
    else if (img_2.style.visibility == "visible" && img_2.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "visible", "1", btn_div, 1, "#fff");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
    else if (img_3.style.visibility == "visible" && img_3.style.opacity == "1") {
        style(img_1, "hidden", "0", btn_div, 3, "transparent");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "visible", "1", btn_div, 0, "#fff");
    }
    else {
        style(img_1, "visible", "1", btn_div, 3, "#fff");
        style(img_2, "hidden", "0", btn_div, 2, "transparent");
        style(img_3, "hidden", "0", btn_div, 1, "transparent");
        style(img_4, "hidden", "0", btn_div, 0, "transparent");
    }
}, 6900);