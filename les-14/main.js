// const $btn = document.getElementById('btn');
//
// let resolveMe;
// const promise = new Promise(function (resolve) {
//   resolveMe = resolve;
// });
//
// $btn.addEventListener('click', function () {
//   resolveMe('success');
// });
//
// promise.then(function (val) {
//   console.log(val);
// });


function createSlider($container, imgArray) {
  const $sliderContainer = $container;
  let $sliderElement = null;
  let $nextBtn = null;
  let $prevBtn = null;
  let currentSlide = 0;

  function getSliderItemWidth() {
    let itemW = $sliderElement.querySelector('.item');
    return itemW.clientWidth;
  }

  function setPosition() {
    let itemWidth = getSliderItemWidth();
    $sliderElement.style.left =
      -1 * currentSlide * itemWidth + 'px';
  }

  function windowResize() {
    setPosition();
  }

  function nextSlide() {
    currentSlide++;
    setPosition();

    $prevBtn.classList.remove('hide');

    if (currentSlide === $sliderElement.children.length - 1) {
      $nextBtn.classList.add('hide');
    }
  }

  function previousSlide() {
    currentSlide--;
    setPosition();

    $nextBtn.classList.remove('hide');

    if (currentSlide <= 0) {
      $prevBtn.classList.add('hide');
    }
  }

  function insertImages() {
    const promiseArray = [];

    imgArray.forEach(function (imgUrl) {
      const $item = document.createElement('div');
      const $img = document.createElement('img');

      $item.classList.add('item');
      $img.classList.add('image');
      $img.src = imgUrl;

      $item.append($img);
      $sliderElement.append($item);

      promiseArray.push(new Promise((resolve) => {
        $img.addEventListener('load', function () {
          resolve();
        });
      }));
    });

    Promise
      .all(promiseArray)
      .then(function () {
        $sliderContainer.classList.remove('hide');
      })
      .catch(() => {
        console.error('Images have not been loaded :(');
      });
  }

  function createMarkup() {
    $sliderElement = document.createElement('div');
    $prevBtn = document.createElement('button');
    $nextBtn = document.createElement('button');

    $sliderElement.classList.add('slider');
    $prevBtn.classList.add('prev-btn', 'hide');
    $prevBtn.addEventListener('click', previousSlide);
    $nextBtn.classList.add('next-btn');
    $nextBtn.addEventListener('click', nextSlide);

    $sliderContainer.classList.add('hide');

    $sliderContainer.appendChild($sliderElement);
    $sliderContainer.appendChild($prevBtn);
    $sliderContainer.appendChild($nextBtn);

    insertImages();
  }

  createMarkup();
  window.addEventListener('resize', windowResize);
}

let imgArr = [
  'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80'
];

let $container = document.querySelector('#container1');
let $container2 = document.querySelector('#container2');

createSlider($container, imgArr);
createSlider($container2, imgArr);

