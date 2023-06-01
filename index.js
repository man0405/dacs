const data = [
	{
		name: "Town State 1",
		address: "John Street",
		description:
			"The Town State 1 address is available for registration purposes only",
		image: "./image/photo-1459767129954-1b1c1f9b9ace.png",
	},
	{
		name: "Town State 2",
		address: "John Street 2",
		description:
			"TheTown State 2 address is available for registration purposes only",
		image: "./image/photo-1459767129954-1b1c1f9b9ace.png",
	},
	{
		name: "Town State 3",
		address: "John Street 3",
		description: "TheTown State 3 address is available",
		image: "./image/photo-1512918728675-ed5a9ecdebfd.png",
	},
	{
		name: "Town State 4",
		address: "John Street 4",
		description:
			" TheTown State 4 address is available only for registration purposes only",
		image: "./image/photo-1580216643062-cf460548a66a.png",
	},
	{
		name: "Town State 5",
		address: "John Street 5",
		description:
			"TheTown State 5 address is available only for registration purposes only",
		image: "./image/photo-1580216643062-cf460548a66a.png",
	},
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";

for (let i = 0; i < data.length; i++) {
	introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="address" style="--idx: 0">${data[i].address}</h5>
            </span>
            <span>
                <h1 class="name" style="--idx: 1">${data[i].name}</h1>
            </span>
            <span>
                <p class="description" style="--idx: 2">${data[i].description}</p>
            </span>
            <span>
                <button class="discover-button" style="--idx: 3">Discover now</button>
            </span>
        </div>`;

	ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}
introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");
thumbnailListWrapper.innerHTML += `
    <div class="thumbnail zoom">
        <img src=${data[0].image} alt="">
    </div>`;

for (let i = 1; i < data.length; i++) {
	thumbnailListWrapper.innerHTML += `
    <div class="thumbnail" style="--idx: ${i - 1}">
        <img src=${data[i].image} alt="">
    </div>`;
}

const nextBtn = document.querySelector(".navigation .next-button");
let currentIndex = 0;
let canBeClicked = true;
nextBtn.addEventListener("click", () => {
	if (!canBeClicked) {
		return;
	}
	canBeClicked = false;
	let clone = thumbnailListWrapper.children[0].cloneNode(true);
	clone.classList.remove("zoom");
	thumbnailListWrapper.appendChild(clone);
	thumbnailListWrapper.children[1].classList.add("zoom");
	setTimeout(() => {
		thumbnailListWrapper.children[0].remove();
		canBeClicked = true;
	}, 1000);
	for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
		thumbnailListWrapper.children[i].style = `--idx: ${i - 2}`;
	}
	if (currentIndex < data.length - 1) {
		currentIndex++;
	} else currentIndex = 0;
	for (let i = 0; i < data.length; i++) {
		introduce.children[i].classList.remove("active");
		ordinalNumber.children[i].classList.remove("active");
	}
	introduce.children[currentIndex].classList.add("active");
	ordinalNumber.children[currentIndex].classList.add("active");
	ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});
