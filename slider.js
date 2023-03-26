let images = [{
    img: "images/photo1.jpg",
	title: "Rostov-on-Don, Admiral"
  }, {
    img: "images/photo2.jpg",
	title: "Sochi Thieves"
  }, {
    img: "images/photo3.jpg",
	title: "Rostov-on-Don Patriotic"
}];

function initSlider() {
	
	
	let sliderImages = document.querySelector(".slider__images");
	let sliderDots = document.querySelector(".slider__dots");
	let navItem = document.querySelector(".nav__item");
	
	initImages();
	initArrows();
	initDots();
	initLink();
	
	function initImages() {
	  images.forEach((image, index) => {
		let imageDiv = `<img  class="slider-content__img n${index} ${index === 0? "active" : ""}" src="${images[index].img}" data-index="${index}" alt="photo" />`;
		sliderImages.innerHTML += imageDiv;
	  });
	}
	
	function initArrows() {
	  document.querySelectorAll(".slider__arrow").forEach(arrow => {
		arrow.addEventListener("click", function() {
		  let curNumber = +sliderImages.querySelector(".active").dataset.index;
		  let nextNumber;
		  if (arrow.classList.contains("left")) {
			nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
		  } else {
			nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
		  }
		  moveSlider(nextNumber);
		});
	  });
	}
	
	function initDots() {
	  images.forEach((image, index) => {
		let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
		sliderDots.innerHTML += dot;
	  });
	  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
		dot.addEventListener("click", function() {
		  moveSlider(this.dataset.index);
		})
	  })
	}

	function initLink() {
		images.forEach((image, index) => {
			let link = `<span class="nav-item__link n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</span>`;
			navItem.innerHTML += link;
		  });
		  navItem.querySelectorAll(".nav-item__link").forEach(link => {
			link.addEventListener("click", function() {
			  moveSlider(this.dataset.index);
			})
		  })
	}
	
	function moveSlider(num) {
	  sliderImages.querySelector(".active").classList.remove("active");
	  sliderImages.querySelector(".n" + num).classList.add("active");
	  
		sliderDots.querySelector(".active").classList.remove("active");
		sliderDots.querySelector(".n" + num).classList.add("active");

		navItem.querySelector(".active").classList.remove("active");
		navItem.querySelector(".n" + num).classList.add("active");
	}
  }

  document.addEventListener("DOMContentLoaded", function() {
	initSlider();
  });