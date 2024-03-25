let accBox = document.querySelector("div.accBox");
let cancel = document.querySelector("div.accBox > a.cancel");
let formBox = document.querySelector("div.accBox > div.formBox");
let icon_acc = document.querySelector(".icon_2");
let inp = document.querySelector(
	"div.accBox > div.formBox > form > input:nth-of-type(2)"
);
let show = document.querySelector(
	"div.accBox > div.formBox > form > button.show_pass"
);

let svg_1 = document.getElementById("eye");
let svg_2 = document.getElementById("eye-slash");

icon_acc.addEventListener("click", () => {
	accBox.setAttribute("style", "opacity: 1; visibility: visible;");
});

cancel.addEventListener("click", () => {
	accBox.removeAttribute("style");
});

show.addEventListener("click", () => {
	if (inp.type === "password") {
		inp.type = "text";
		svg_2.style.display = "none";
		svg_1.style.display = "block";
	} else {
		inp.type = "password";
		svg_2.style.display = "block";
		svg_1.style.display = "none";
	}
});
