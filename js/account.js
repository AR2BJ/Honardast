let inp2 = document.querySelector(
	"main.main > div.submit > form > div.input_form > div.wave-group:nth-of-type(6) > input"
);
let inp3 = document.querySelector(
	"main.main > div.submit > form > div.input_form > div.wave-group:nth-of-type(7) > input"
);
let show2 = document.querySelector(
	"main.main > div.submit > form > div.input_form > div.wave-group:nth-of-type(6) > button.show_pass"
);
let show3 = document.querySelector(
	"main.main > div.submit > form > div.input_form > div.wave-group:nth-of-type(7) > button.show_pass"
);

let svg_3 = document.getElementById("eye2");
let svg_4 = document.getElementById("eye-slash2");
let svg_5 = document.getElementById("eye3");
let svg_6 = document.getElementById("eye-slash3");

show2.addEventListener("click", () => {
	if (inp2.type === "password") {
		inp2.type = "text";
		svg_4.style.display = "none";
		svg_3.style.display = "block";
	} else {
		inp2.type = "password";
		svg_4.style.display = "block";
		svg_3.style.display = "none";
	}
});

show3.addEventListener("click", () => {
	if (inp3.type === "password") {
		inp3.type = "text";
		svg_6.style.display = "none";
		svg_5.style.display = "block";
	} else {
		inp3.type = "password";
		svg_6.style.display = "block";
		svg_5.style.display = "none";
	}
});