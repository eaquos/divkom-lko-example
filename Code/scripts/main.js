/** Begin of The Hello World Part  **/

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/************************************/


/**      Begin of Event Part       **/

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

/************************************/


/**     Begin of Image Changer     **/


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/divkom.jpg') {
      myImage.setAttribute ('src','images/hme.jpg');
    } else {
      myImage.setAttribute ('src','images/divkom.jpg');
    }
}

/************************************/