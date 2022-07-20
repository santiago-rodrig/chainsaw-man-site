let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');

  if (mySrc === 'images/chainsaw-man.jpg') {
    myImage.setAttribute('src', 'images/chainsaw-man-2.webp');
  } else {
    myImage.setAttribute('src', 'images/chainsaw-man.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chainsaw Man Wiki, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Chainsaw Man Wiki, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}