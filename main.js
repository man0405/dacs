const descriptionBanner = document.querySelector(".description-banner span");

const textLoad = () => {
	setTimeout(() => {
		descriptionBanner.classList.add("active");
	}, 7000);
};
textLoad();

/*
	setTimeout(() => {
		descriptionBanner.textContent =
			"Hạnh phúc là lan tỏa truyền cảm hứng đầy năng lượng";
	}, 8000);
	setTimeout(() => {
		descriptionBanner.classList.add("active");
	}, 4000);
	setTimeout(() => {
		descriptionBanner.textContent = "Hạnh phúc là tình yêu thương xung quanh";
	}, 16000);
	setTimeout(() => {
		descriptionBanner.classList.add("active");
	}, 4000);
*/
