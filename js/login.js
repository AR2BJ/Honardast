let accBox = document.querySelector(".accBox");
let cancel = document.querySelector(".cancel");
let formBox = document.querySelector(".formBox");
let icon_acc = document.querySelector(".icon_2");


icon_acc.addEventListener("click", () => {
    accBox.setAttribute("style", "opacity: 1; visibility: visible;");
    // formBox.style = "position: fixed; right: 25vw; left: 25vw";
});

cancel.addEventListener("click", () => {
    accBox.removeAttribute("style");
    // formBox.removeAttribute("style");
});