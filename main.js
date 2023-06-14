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
			setTimeout(deleteLetter, 1000);
		}
	}

	function deleteLetter() {
		if (index >= 0) {
			descriptionBanner.textContent = text.substring(0, index);
			index--;
			setTimeout(deleteLetter, 50);
		} else {
			currentIndex = (currentIndex + 1) % textDescription.length;
			setTimeout(traverseText, 1000);
		}
	}

	addLetter();
}

traverseText();
