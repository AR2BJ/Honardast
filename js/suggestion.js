let add_buy_btn = document.querySelectorAll(".add_buy_btn");
let badge = document.querySelector(".badge");

add_buy_btn.forEach((item) => {
    item.addEventListener("click", () => {
        badge.style = "visibility: visible; opacity: 1;";
        if (item.click) {
            badge.innerText = Number(badge.innerText) + Number(1);
        }
    });
});
