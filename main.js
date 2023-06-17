const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

backdrop.addEventListener("click", () => {
	backdrop.parentNode.classList.remove("active");
	modal.innerHTML = "";
});

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
const templateGalerry = `<section class="gallery">
<h2 class="gallery-header gray-black-text">
	Photo <br /><span class="bold">Gallery</span>
</h2>
<div class="gallery-wrap">
	<div class="list-wrap">
		<div class="gallery-list gallery-list-none">
			<div class="gallery-item">
				<img src="./image/gallery/1.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/2.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/3.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/4.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/5.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/6.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/7.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/8.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/9.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/10.jpg" alt="" />
			</div>
		</div>
		<div class="gallery-list gallery-list-none">
			<div class="gallery-item">
				<img src="./image/gallery/1.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/2.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/3.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/4.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/5.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/6.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/7.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/8.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/9.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/10.jpg" alt="" />
			</div>
		</div>
		<div class="gallery-list gallery-list-none">
			<div class="gallery-item">
				<img src="./image/gallery/1.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/2.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/3.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/4.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/5.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/6.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/7.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/8.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/9.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/10.jpg" alt="" />
			</div>
		</div>
		<div class="gallery-list gallery-list-none">
			<div class="gallery-item">
				<img src="./image/gallery/1.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/2.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/3.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/4.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/5.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/6.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/7.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/8.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/9.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/10.jpg" alt="" />
			</div>
		</div>
		<div class="gallery-list gallery-list-none">
			<div class="gallery-item">
				<img src="./image/gallery/3.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/1.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/2.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/4.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/5.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/6.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/7.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/8.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/9.jpg" alt="" />
			</div>
			<div class="gallery-item">
				<img src="./image/gallery/10.jpg" alt="" />
			</div>
		</div>
		<div class="gallery-list gallery-loader active">
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
			<div class="gallery-item"></div>
		</div>
	</div>
</div>
<div class="function">
	<div class="numberic">
		<div class="current-number">0<br /><span>1</span></div>
		<div class="amount">05</div>
	</div>
	<div class="btn-prev primary-btn">
		<ion-icon name="arrow-back-outline"></ion-icon>
	</div>
	<div class="btn-next primary-btn">
		<ion-icon name="arrow-forward-outline"></ion-icon>
	</div>
</div>
</section>
<script>
const galleryLoader = document.querySelector(".gallery-loader");
const listWrap = document.querySelector(".list-wrap");
const galleryListAll = document.querySelectorAll(".gallery-list-none");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const currentNumber = document.querySelector(".current-number span");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
let index = 0;
let galleryItem =
	galleryListAll[index].querySelectorAll(".gallery-item");
clickGalleryItem(index);
setTimeout(() => {
	galleryLoader.classList.remove("active");
	listWrap.children[0].classList.add("active");
}, 1000);

btnPrev.addEventListener("click", () => {
	if (index <= 0) {
		index = galleryListAll.length - 1;
	} else {
		index--;
	}
	galleryListAll.forEach((gallery) =>
		gallery.classList.remove("active")
	);
	galleryLoader.classList.add("active");
	currentNumber.textContent = index + 1;
	clickGalleryItem(index);
	setTimeout(() => {
		galleryLoader.classList.remove("active");
		galleryListAll[index].classList.add("active");
	}, 1000);
});
btnNext.addEventListener("click", () => {
	if (index >= galleryListAll.length - 1) {
		index = 0;
		console.log("index 0");
	} else {
		index++;
	}
	galleryListAll.forEach((gallery) =>
		gallery.classList.remove("active")
	);
	galleryLoader.classList.add("active");
	currentNumber.textContent = index + 1;
	clickGalleryItem(index);
	setTimeout(() => {
		galleryLoader.classList.remove("active");
		galleryListAll[index].classList.add("active");
	}, 1000);
});

function clickGalleryItem(index) {
	galleryItem = galleryListAll[index].querySelectorAll(".gallery-item");
	galleryItem.forEach((gallery) =>
		gallery.addEventListener("click", (e) => {
			backdrop.parentNode.classList.add("active");

			const link = e.target.attributes.src.textContent;
			modal.innerHTML = '<img '+'src=' + '"' +link + '"' + '>';
		})
	);
}
</script>`;
const templateProject = `<section class="projects">
<h2 class="project-header gray-black-text">
	Our <br /><span class="bold">Projects</span>
</h2>
<div class="project-wrap">
	<div class="project-list-wrap">
		<div class="project-list project-list-none">
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
		</div>
		<div class="project-list project-list-none">
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
		</div>
		<div class="project-list project-list-none">
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
		</div>
		<div class="project-list project-list-none">
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
		</div>
		<div class="project-list project-list-none">
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
			<div class="project">
				<div class="project-img">
					<img src="./image/project1.png" alt="" />
				</div>
				<div class="project-content">
					<div class="title">Sample Project</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Deserunt eligendi atque ratione quis soluta repellat quidem
						doloribus minus, iusto ipsum expedita dolores culpa
						voluptates eveniet id esse vitae voluptatem? Labore!
					</div>
					<div class="primary-btn btn-view-more">
						View More
						<ion-icon
							name="arrow-forward-outline"
							style="margin-left: 2rem"
						></ion-icon>
					</div>
				</div>
			</div>
		</div>
		<div class="project-list project-loader active">
			<div class="project">
				<div class="project-img"></div>
				<div class="project-content">
					<div class="title"></div>
					<div class="description"></div>
					<div class="primary-btn"></div>
				</div>
			</div>
			<div class="project">
				<div class="project-img"></div>
				<div class="project-content">
					<div class="title"></div>
					<div class="description"></div>
					<div class="primary-btn"></div>
				</div>
			</div>
			<div class="project">
				<div class="project-img"></div>
				<div class="project-content">
					<div class="title"></div>
					<div class="description"></div>
					<div class="primary-btn"></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="function">
	<div class="numberic">
		<div class="current-number">0<br /><span>1</span></div>
		<div class="amount">05</div>
	</div>
	<div class="btn-prev primary-btn">
		<ion-icon name="arrow-back-outline"></ion-icon>
	</div>
	<div class="btn-next primary-btn">
		<ion-icon name="arrow-forward-outline"></ion-icon>
	</div>
</div>
</section>
<script>
const projectLoader = document.querySelector(".project-loader");
const projectListWrap = document.querySelector(".project-list-wrap");
const projectListAll = document.querySelectorAll(".project-list-none");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const currentNumber = document.querySelector(".current-number span");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const viewMore = document.querySelectorAll(".btn-view-more");
let index = 0;
setTimeout(() => {
	projectLoader.classList.remove("active");
	projectListWrap.children[0].classList.add("active");
}, 1000);

btnPrev.addEventListener("click", () => {
	if (index <= 0) {
		index = projectListAll.length - 1;
	} else {
		index--;
	}
	projectListAll.forEach((gallery) =>
		gallery.classList.remove("active")
	);
	projectLoader.classList.add("active");
	currentNumber.textContent = index + 1;
	setTimeout(() => {
		projectLoader.classList.remove("active");
		projectListAll[index].classList.add("active");
	}, 1000);
});
btnNext.addEventListener("click", () => {
	if (index >= projectListAll.length - 1) {
		index = 0;
		console.log("index 0");
	} else {
		index++;
	}
	projectListAll.forEach((gallery) =>
		gallery.classList.remove("active")
	);
	projectLoader.classList.add("active");
	currentNumber.textContent = index + 1;
	setTimeout(() => {
		projectLoader.classList.remove("active");
		projectListAll[index].classList.add("active");
	}, 1000);
});

viewMore.forEach((item) =>
	item.addEventListener("click", () => {
		console.log("viewMore");
	})
);
</script>`;

const templates = [templateMain, templateGalerry, templateProject];

main.innerHTML = templates[0];
const script = document.querySelector("main.main-container script");
eval(script.textContent);
script.parentNode.removeChild(script);

// newScript.innerHTML = script.textContent;

navItem.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.target.classList.contains("active")) {
			return;
		}
		navItem.forEach((item) => item.classList.remove("active"));
		item.classList.add("active");
		main.innerHTML = templates[item.dataset.index];
		const script = document.querySelector("main.main-container script");
		// newScript.innerHTML = script.textContent;
		eval(script.textContent);
		script.parentNode.removeChild(script);
	});
});
