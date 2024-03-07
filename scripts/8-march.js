var textArray = ["Are you sure?", "Really-really sure?", "Oh, c'mon :(", "Please, don't breake my heart", "Last chance?"];

var count = 0;

var buttonNo = document.getElementById('no-button');

function clickNo(){
	++count;
	if (count === 5){
		buttonNo.style.display = 'none';
	}
	buttonNo.textContent = textArray[count - 1];
}

buttonNo.addEventListener('click', clickNo);

var theImage = document.getElementById('theImage');

function switchingSides(){
	theImage.src = "images/huh-image.jpg"
}
buttonNo.addEventListener('mouseover', switchingSides);

function sidesSwitching(){
	 theImage.src = "images/please-image.jpg"
}
buttonNo.addEventListener('mouseout', sidesSwitching);