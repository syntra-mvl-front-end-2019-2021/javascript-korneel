let app = document.getElementById('app');
let header = document.getElementById('header');
console.log(header);
// let paragraphFromPage = document.getElementsByTagName('p');
let paragraph = document.createElement('p');
let span = document.createElement('span');
span.innerText = 'Dit is ook tof';
paragraph.appendChild(span);

function parClick(event) {
    console.log('Joepie');
}

paragraph.addEventListener('click', parClick);

// console.log(paragraphFromPage);
console.log(paragraph);

app.appendChild(paragraph);
// app.insertBefore(paragraph, header);

// paragraph.innerText = 'Dit is tof!';
paragraph.setAttribute('id', 'par-1');
const headerId = header.getAttribute('id');
header.setAttribute('id', headerId + ' header-2');

header.remove();

app.innerHTML += '<p id="par-2"><span>Dit is ook tof</span></p>';

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0]);