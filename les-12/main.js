const previousBtn = document.querySelector('.citation-slider__previous');
const nextBtn = document.querySelector('.citation-slider__next');
const sliderContainer = document.querySelector('.citation-slider');

let sliderInfo = {
  sliderElement: sliderContainer,
  sliderItemCount: sliderContainer.children.length,
  currentSlide: 0,
};

function getSliderItemWidth() {
  const sliderItem = document.querySelector('.citation-slider__item');

  return sliderItem.clientWidth;
}

function getShownItems() {
  const container = document.querySelector('.sub-container');

  return Math.round(container.clientWidth / getSliderItemWidth());
}

function nextSlide(event) {
  const itemWidth = getSliderItemWidth();
  const shownItems = getShownItems();

  if (sliderInfo.currentSlide === sliderInfo.sliderItemCount - shownItems) {
    nextBtn.classList.add('hide');
    return;
  }

  if (
    sliderInfo.currentSlide ===
    sliderInfo.sliderItemCount - (shownItems + 1)
  ) {
    nextBtn.classList.add('hide');
  }

  previousBtn.classList.remove('hide');

  sliderInfo.currentSlide++;

  sliderInfo.sliderElement.style.left =
    -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

function previousSlide(event) {
  if (sliderInfo.currentSlide === 0) {
    return;
  }

  if (sliderInfo.currentSlide === 1) {
    previousBtn.classList.add('hide');
  }

  const itemWidth = getSliderItemWidth();
  nextBtn.classList.remove('hide');
  sliderInfo.currentSlide--;

  sliderInfo.sliderElement.style.left =
    -1 * sliderInfo.currentSlide * itemWidth + 'px';
}

function windowResize() {
  const itemWidth = getSliderItemWidth();
  sliderInfo.sliderElement.style.left =
    -1 * sliderInfo.currentSlide * itemWidth + 'px';

  const shownItems = getShownItems();

  if (sliderInfo.currentSlide === sliderInfo.sliderItemCount - shownItems) {
    nextBtn.classList.add('hide');
  } else {
    nextBtn.classList.remove('hide');
  }
}

previousBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('resize', windowResize);
