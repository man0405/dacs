const navItem = document.querySelectorAll(".nav-item");

const main = document.querySelector("main.main-container");
const newScript = document.querySelector(".newScript");
const templateMain = `	<section class="main">
<div class="banner">
	<div class="overlay"></div>
	<div class="img-banner">
		<img src="./image/banner.jpg" alt="" />
	</div>
	<div class="content">
		<h2 class="title">Nơi tràn ngập hạnh phúc</h2>
		<div class="description-banner">
			<span></span>
		</div>
	</div>
</div>
</section>
<section class="slogan">
<div class="slogan-item">
	<div class="slogan-image">
		<img src="./image/Outline/diamond.png" alt="" />
	</div>
	<div class="slogan-content">
		<h3 class="title">Assumenda totam culpa</h3>
		<h5 class="description">
			Qui ipsa odio provident sit similique fuga doloremque. Repellendus
			cumque suscipit consequuntur provident et asperiores ut. Et ut
			omnis nihil harum et eveniet ex nostrum.
		</h5>
	</div>
</div>
<div class="slogan-item">
	<div class="slogan-image">
		<img src="./image/Outline/fire.png" alt="" />
	</div>
	<div class="slogan-content">
		<h3 class="title">Assumenda totam culpa</h3>
		<h5 class="description">
			Qui ipsa odio provident sit similique fuga doloremque. Repellendus
			cumque suscipit consequuntur provident et asperiores ut. Et ut
			omnis nihil harum et eveniet ex nostrum.
		</h5>
	</div>
</div>
<div class="slogan-item">
	<div class="slogan-image">
		<img src="./image/Outline/flash.png" alt="" />
	</div>
	<div class="slogan-content">
		<h3 class="title">Assumenda totam culpa</h3>
		<h5 class="description">
			Qui ipsa odio provident sit similique fuga doloremque. Repellendus
			cumque suscipit consequuntur provident et asperiores ut. Et ut
			omnis nihil harum et eveniet ex nostrum.
		</h5>
	</div>
</div>
<div class="slogan-item">
	<div class="slogan-image">
		<img src="./image/Outline/Icon.png" alt="" />
	</div>
	<div class="slogan-content">
		<h3 class="title">Assumenda totam culpa</h3>
		<h5 class="description">
			Qui ipsa odio provident sit similique fuga doloremque. Repellendus
			cumque suscipit consequuntur provident et asperiores ut. Et ut
			omnis nihil harum et eveniet ex nostrum.
		</h5>
	</div>
</div>
<div class="slogan-item">
	<div class="slogan-image">
		<img src="./image/Outline/power.png" alt="" />
	</div>
	<div class="slogan-content">
		<h3 class="title">Assumenda totam culpa</h3>
		<h5 class="description">
			Qui ipsa odio provident sit similique fuga doloremque. Repellendus
			cumque suscipit consequuntur provident et asperiores ut. Et ut
			omnis nihil harum et eveniet ex nostrum.
		</h5>
	</div>
</div>
<div class="slogan-item">
	<div class="slogan-image">
		<img src="./image/Outline/setting.png" alt="" />
	</div>
	<div class="slogan-content">
		<h3 class="title">Assumenda totam culpa</h3>
		<h5 class="description">
			Qui ipsa odio provident sit similique fuga doloremque. Repellendus
			cumque suscipit consequuntur provident et asperiores ut. Et ut
			omnis nihil harum et eveniet ex nostrum.
		</h5>
	</div>
</div>
</section>
<section class="step">
<div class="step-image">
	<img src="./image/step.png" alt="" />
</div>
<div class="step-content">
	<div class="title">
		Simple <span class="underline">Step</span>, <br />
		Big
		<span class="underline">Move</span>
	</div>
	<div class="description">
		Copy Aut autem aut. Quis molestiae porro aut tempora similique
		deleniti sint laborum eius. Repudiandae qui sint nobis ipsum
		voluptas eius. Impedit voluptas animi numquam et placeat. Neque aut
		alias architecto dolor natus corporis. Itaque in laborum blanditiis
		qui quo non numquam.
	</div>
	<div class="step-list">
		<div class="step-item">
			<ion-icon name="create-outline"></ion-icon>
			<span>Design your dream</span>
		</div>
		<div class="step-item">
			<ion-icon name="layers-outline"></ion-icon>
			<span>Build and release</span>
		</div>
		<div class="step-item">
			<ion-icon name="home-outline"></ion-icon>
			<span>Ready to be occupied</span>
		</div>
	</div>
	<button class="primary-btn">
		<a href="tel:0339228204">
			<span class="text"> Contact Us </span>
			<ion-icon name="call-outline"></ion-icon>
		</a>
	</button>
</div>
</section>
<section class="our-projects">
<h2 class="title underline">Our Project</h2>
<div class="project-list">
	<div class="project show" data-id="1">
		<div class="overlay"></div>
		<h3 class="name-project">Minimalism & Modern</h3>
		<div class="project-image">
			<img src="./image/project1.png" alt="" />
		</div>
		<button class="primary-btn" style="min-width: 1rem">
			<ion-icon name="send-outline"></ion-icon>
		</button>
	</div>
	<div class="project" data-id="2">
		<div class="overlay"></div>
		<h3 class="name-project">Minimalism & Modern</h3>
		<div class="project-image">
			<img src="./image/project2.png" alt="" />
		</div>
		<button class="primary-btn" style="min-width: 1rem">
			<ion-icon name="send-outline"></ion-icon>
		</button>
	</div>
	<div class="project" data-id="3">
		<div class="overlay"></div>
		<h3 class="name-project">Minimalism & Modern</h3>
		<div class="project-image">
			<img src="./image/project3.png" alt="" />
		</div>
		<button class="primary-btn" style="min-width: 1rem">
			<ion-icon name="send-outline"></ion-icon>
		</button>
	</div>
	<div class="project" data-id="4">
		<div class="overlay"></div>
		<h3 class="name-project">Minimalism & Modern</h3>
		<div class="project-image">
			<img src="./image/project4.png" alt="" />
		</div>
		<button class="primary-btn" style="min-width: 1rem">
			<ion-icon name="send-outline"></ion-icon>
		</button>
	</div>
</div>
</section>
<script>
const descriptionBanner = document.querySelector(
	".description-banner span"
);
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
</script>`;
const templateGalerry = `
	<script>test</script>
`;

const templates = [templateMain, templateGalerry];

main.insertAdjacentHTML("afterbegin", templates[0]);
const script = document.querySelector("main.main-container script");
newScript.innerHTML = script.textContent;

navItem.forEach((item) => {
	item.addEventListener("click", (e) => {
		navItem.forEach((item) => item.classList.remove("active"));
		item.classList.add("active");
		main.innerHTML = templates[item.dataset.index];
		const script = document.querySelector("main.main-container script");
		newScript.innerHTML = script.textContent;
	});
});

// main.insertAdjacentHTML("afterbegin", templateMain);
