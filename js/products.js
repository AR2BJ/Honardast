let pro_1 = document.querySelector(
	"main.main > div.pro_list > div.products > div.pro_1"
);

let pro_2 = document.querySelector(
	"main.main > div.pro_list > div.products > div.pro_2"
);

let pag = document.querySelectorAll(
	"main.main > div.pro_list > div.products > div.pag_btn > nav > a"
);

let span = document.querySelectorAll(
	"main.main > div.pro_list > div.products > div.pag_btn > nav > span"
);
let activeIndex = 1;

function updatePagination() {
	pag.forEach((button, index) => {
		if (
			index === activeIndex &&
			activeIndex !== 0 &&
			activeIndex !== pag.length - 1
		) {
			button.classList.remove(
				"text-gray-900",
				"ring-1",
				"ring-inset",
				"ring-gray-300",
				"hover:bg-gray-100",
				"focus:z-20",
				"focus:outline-offset-0"
			);
			button.classList.add(
				"bg-[#1e6889]",
				"text-white",
				"focus:z-20",
				"focus-visible:outline",
				"focus-visible:outline-2",
				"focus-visible:outline-offset-2",
				"focus-visible:outline-[#1e6889]"
			);
		} else if (activeIndex === 0 || activeIndex === pag.length - 1) {
			return null;
		}  else {
			button.classList.remove(
				"bg-[#1e6889]",
				"text-white",
				"focus:z-20",
				"focus-visible:outline",
				"focus-visible:outline-2",
				"focus-visible:outline-offset-2",
				"focus-visible:outline-[#1e6889]"
			);
			button.classList.add(
				"text-gray-900",
				"ring-1",
				"ring-inset",
				"ring-gray-300",
				"hover:bg-gray-100",
				"focus:z-20",
				"focus:outline-offset-0"
			);
		}
	});
}

pag.forEach((button, index) => {
	button.addEventListener("click", (event) => {
		event.preventDefault();

		if (button.classList.contains("pre")) {
			activeIndex = Math.max(0, activeIndex - 1);
			pag[activeIndex + 2].classList.replace("md:inline-flex", "md:hidden");
			if (activeIndex === 7) {
				span[0].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex - 3].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex - 2].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex - 1].classList.replace("md:hidden", "md:inline-flex");
			} else if (activeIndex === 10) {
				pag[activeIndex - 7].classList.replace("md:hidden", "md:inline-flex");
			} else if (activeIndex === 11) {
				pag[activeIndex - (activeIndex - 2)].classList.replace(
					"md:hidden",
					"md:inline-flex"
				);
				pag[activeIndex - 4].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex - 3].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex - 2].classList.replace("md:hidden", "md:inline-flex");
			} else if (activeIndex > 11 && activeIndex < 20) {
				pag[activeIndex - 3].classList.replace("md:hidden", "md:inline-flex");
			} else if (activeIndex === 20) {
				span[1].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex + 3].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex + 2].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex + 1].classList.replace("md:inline-flex", "md:hidden");
			} else {
				event.preventDefault();
			}
			if (activeIndex - 1 === 0 || activeIndex >= 21) {
				pag[activeIndex + 2].classList.replace("md:hidden", "md:inline-flex");
			}
		} else if (button.classList.contains("next")) {
			activeIndex = Math.min(pag.length - 1, activeIndex + 1);
			pag[activeIndex + 1].classList.replace("md:hidden", "md:inline-flex");
			if (activeIndex === 8) {
				span[0].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex - 4].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex - 3].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex - 2].classList.replace("md:inline-flex", "md:hidden");
			} else if (activeIndex === 11) {
				pag[activeIndex - 8].classList.replace("md:inline-flex", "md:hidden");
			} else if (activeIndex > 11 && activeIndex < 21) {
				pag[activeIndex - (activeIndex - 2)].classList.replace(
					"md:inline-flex",
					"md:hidden"
				);
				pag[activeIndex - 6].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex - 5].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex - 4].classList.replace("md:inline-flex", "md:hidden");
			} else if (activeIndex === 21) {
				span[1].classList.replace("md:inline-flex", "md:hidden");
				pag[activeIndex + 2].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex + 1].classList.replace("md:hidden", "md:inline-flex");
				pag[activeIndex].classList.replace("md:hidden", "md:inline-flex");
			} else {
				event.preventDefault();
			}
		} else if (activeIndex === 3) {
			pag[4].classList.replace("md:hidden", "md:inline-flex");
		} else {
			activeIndex = index;
		}

		updatePagination();
		window.scrollTo(0, 0);
	});
});

updatePagination();
