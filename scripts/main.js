//change img
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}
//end

//button welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//set function to get name
function setUserName() {
    let myName = prompt('Unesi svoje ime.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' je gej';
    }
  }

//check if name exist in localstorage
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' je gej';
  }

//set button onclick
myButton.onclick = function() {
    setUserName();
  }
//end
  


