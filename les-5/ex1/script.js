let par1 = document.getElementById('p-1');
let par2 = document.getElementById('p-2');
let par3 = document.getElementById('p-3');

function paragraphClicked(event) {
    event.target.innerText = 'Hello World';
}

par1.addEventListener('click', paragraphClicked);
par2.addEventListener('click', paragraphClicked);
par3.addEventListener('click', paragraphClicked);
