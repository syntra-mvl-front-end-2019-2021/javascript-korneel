const $btn = document.getElementById('btn');

let resolveMe;
const promise = new Promise(function (resolve) {
  resolveMe = resolve;
});

$btn.addEventListener('click', function () {
  resolveMe('success');
});

promise.then(function (val) {
  console.log(val);
});

// PROMISE

const img1 =
  'https://images.unsplash.com/photo-1470116109808-c71d8bd6f4a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
const img2 =
  'https://images.unsplash.com/photo-1470117144297-a67b448680bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
const img3 =
  'https://images.unsplash.com/photo-1477044545293-98b9221de30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
const img4 =
  'https://images.unsplash.com/photo-1478105069489-aca3e3fedcf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

let promise1 = new Promise((resolve, reject) => {
  let img = document.createElement('img');
  img.addEventListener('load', (ev) => {
    // console.log(img);
    resolve(img);
  });
  img.addEventListener('error', (err) => {
    console.log('Image 1 is NOT loaded');
    reject(err);
  });
  img.src = img1;
});

let promise2 = new Promise((resolve, reject) => {
  let img = document.createElement('img');
  img.addEventListener('load', (ev) => {
    // console.log(img);
    resolve(img);
  });
  img.addEventListener('error', (err) => {
    console.log('Image 2 is NOT loaded');
    reject(err);
  });
  img.src = img2;
});

let promise3 = new Promise((resolve, reject) => {
  let img = document.createElement('img');
  img.addEventListener('load', (ev) => {
    // console.log(img);
    resolve(img);
  });
  img.addEventListener('error', (err) => {
    console.log('Image 3 is NOT loaded');
    reject(err);
  });
  img.src = img3;
});

let promise4 = new Promise((resolve, reject) => {
  let img = document.createElement('img');
  img.addEventListener('load', (ev) => {
    // console.log(img);
    resolve(img);
  });
  img.addEventListener('error', (err) => {
    console.log('Image 4 is NOT loaded');
    reject(err);
  });
  img.src = img4;
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((array) => {
    console.log('ALL images are loaded');
  })
  .catch((err) => {
    console.log('Something went wrong');
  });

// SLIDER

var i = 0;
var images = [];
var time = 3000;

images[0] = img1;
images[1] = img2;
images[2] = img3;
images[3] = img4;

function changeImg() {
  console.log(images[i]);
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', time);
}
changeImg();

function createSlider(root, imgArray) {
  // root hidden
  root.hidden = true;
  // generate all html
  // wait for all images to be loaded ('load' event and Promise.all)
  root.hidden = false;
}

const sliderOne = document.getElementById('slider-1');
const imgArray = [
  'https://images.unsplash.com/photo-1470116109808-c71d8bd6f4a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1470117144297-a67b448680bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1477044545293-98b9221de30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1478105069489-aca3e3fedcf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

createSlider(sliderOne, imgArray);
