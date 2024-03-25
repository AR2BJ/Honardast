let header = document.querySelector("header.header");
let menu_bar = document.querySelector("header.header > ul.menu_bar");
let item_link = document.querySelectorAll(
	"header.header > ul.menu_bar > li.menu_item > a.item_link"
);
let icon_header = document.querySelector("header.header > div.icon_header");
let icon_search = document.querySelectorAll(
	"header.header > div.icon_header > a.icon"
);
let div_search = document.querySelector("header.header > div.div_search");
let bars = document.querySelector("header.header > a.bars");
let main = document.querySelector("main.main");
let about_content = document.querySelector("main.main > div.about_content");
let footer = document.querySelector("footer.footer");
let scroll = window.scrollY;

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		header.classList.add("bg-zinc-800");
		item_link.forEach((item) => {
			item.classList.remove("text-zinc-800");
			item.classList.add("text-white");
		});
		icon_search.forEach((item) => {
			item.classList.remove("text-zinc-800");
			item.classList.add("text-white");
		});
		bars.classList.remove("text-black");
		bars.classList.add("text-white");
	} else {
		header.classList.remove("bg-zinc-800");
		item_link.forEach((item) => {
			item.classList.remove("text-white");
			item.classList.add("text-zinc-800");
		});
		icon_search.forEach((item) => {
			item.classList.remove("text-white");
			item.classList.add("text-zinc-800");
		});
		bars.classList.remove("text-white");
		bars.classList.add("text-black");
	}
});

if (screen.width <= 1024) {
	icon_search[0].addEventListener("click", () => {
		if (div_search.hasAttribute("style") == false) {
			div_search.style =
				"width: 20% !important; visibility: visible; opacity: 1;";
		} else {
			div_search.removeAttribute("style");
		}
	});
} else {
	icon_search[0].addEventListener("click", () => {
		if (div_search.hasAttribute("style") == false) {
			div_search.style =
				"width: 20% !important; visibility: visible; opacity: 1;";
			menu_bar.style = "grid-column: 3 / 8";
			icon_header.style = "grid-column: 11 / 13";
			scroll;
		} else {
			div_search.removeAttribute("style");
			menu_bar.removeAttribute("style");
			icon_header.removeAttribute("style");
		}
	});
}

item_link.forEach((item) => {
	item.addEventListener("mouseover", (e) => {
		e.target.nextElementSibling.style = "width: 100%";
	});
});

item_link.forEach((item) => {
	item.addEventListener("mouseleave", (e) => {
		e.target.nextElementSibling.removeAttribute("style");
	});
});

bars.addEventListener("click", () => {
	if (menu_bar.hasAttribute("style") == false) {
		menu_bar.style = "height: 100%; padding: 144px 0";
		icon_header.style = "visibility: visible; opacity: 1;";
		main.style = "margin-top: 345px";
	} else {
		menu_bar.removeAttribute("style");
		icon_header.removeAttribute("style");
		main.removeAttribute("style");
	}
});

function ContactUsClick() {
	item_link[3].href = "#!";
	footer.scrollIntoViewIfNeeded();
}
