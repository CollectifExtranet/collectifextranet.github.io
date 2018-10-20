const sliders = [];
const slidersTag = document.querySelectorAll('.project-slider');

for (let i = 0, l = slidersTag.length; i < l; i++) {
	const sliderTag = slidersTag[ i ];

	const slider = {
		container: sliderTag,
		next: sliderTag.querySelector('.project-slider__next'),
		previous: sliderTag.querySelector('.project-slider__previous'),
		list: sliderTag.querySelector('.project-medias'),
		items: sliderTag.querySelectorAll('.project-media'),
		itemsNumber: 0,
		currentIndex: 0,
	}

	sliders.push( slider )

}


for (let i = 0, l = sliders.length; i < l; i++) {
	const slider = sliders[ i ];
	setSize(slider);
	bindEvents(slider);
	initSlider(slider);
}


function setSize(slider) {
	slider.itemsNumber = slider.items.length - 1;
}

function bindEvents(slider) {
	slider.next.addEventListener('click', handleClickNext.bind(slider)) ;
	slider.previous.addEventListener('click', handleClickPrevious.bind(slider)) ;
}


function handleClickNext( event ) {
	this.currentIndex = this.currentIndex === this.itemsNumber ? 0 : this.currentIndex + 1;
	updateSlide(this);
}
function handleClickPrevious( event ) {
	this.currentIndex = this.currentIndex === 0 ? this.itemsNumber : this.currentIndex - 1;
	updateSlide(this);
}

function updateSlide(slider) {
	for (let i = 0, l = slider.items.length; i < l; i++) {
		slider.items[ i ].classList.toggle('project-media--active', i === slider.currentIndex);
	}

	const video = slider.items[ slider.currentIndex ].querySelector('video');
	if(video && video.currentTime === 0) {
		video.volume = 0;
		video.play();
	}
}


function initSlider(slider) {
	slider.items[slider.currentIndex] = 0;
	updateSlide(slider);
}