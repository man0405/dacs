const descriptionBanner = document.querySelector(".description-banner span");
const textDescription = [
	"Hạnh phúc là lan tỏa truyền cảm hứng đầy năng lượng",
	"Hạnh phúc là tình yêu thương xung quanh",
	"Hạnh phúc là vun tròn tổ ám khắp Việt Nam",
];
let currentIndex = 0;

function traverseText() {
	const text = textDescription[currentIndex];
	let index = 0;

	function addLetter() {
		if (index < text.length) {
			descriptionBanner.textContent += text[index];
			index++;
			setTimeout(addLetter, 50);
		} else {
			setTimeout(deleteLetter, 1500);
		}
	}

	function deleteLetter() {
		if (index >= 0) {
			descriptionBanner.textContent = text.substring(0, index);
			index--;
			setTimeout(deleteLetter, 50);
		} else {
			currentIndex = (currentIndex + 1) % textDescription.length;
			setTimeout(traverseText, 1500);
		}
	}

	addLetter();
}
traverseText();

const projectList = document.querySelector(".project-list");
const project = projectList.querySelectorAll(".project");

let gridTemplateColumns;

function createFractionUnit(index) {
	gridTemplateColumns = "grid-template-columns:";
	const units = ["1fr ", "1fr ", "1fr ", "1fr "];
	units[index] = "3fr ";
	units.forEach((item) => {
		gridTemplateColumns += item;
	});
}

project.forEach((item) =>
	item.addEventListener("mouseenter", (e) => {
		project.forEach((item) => item.classList.remove("show"));
		projectList.style = "grid-template-columns: 1fr 1fr 1fr 1fr";
		const id = e.target.dataset.id;
		projectList.children[id - 1].classList.add("show");
		createFractionUnit(id - 1);
		projectList.style = gridTemplateColumns;
		console.log(gridTemplateColumns);
	})
);

project.forEach((item) =>
	item.addEventListener("mouseleave", (e) => {
		projectList.style = "grid-template-columns: 3fr 1fr 1fr 1fr";
		project.forEach((item) => item.classList.remove("show"));
		projectList.children[0].classList.add("show");
	})
);
