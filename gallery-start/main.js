var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

function imageClicked(e){
  displayedImage.setAttribute('src',e.target.getAttribute('src'));
}

/* Looping through images */
for(var i=1;i<=5;i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click',imageClicked);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(){
  if(btn.getAttribute('class')==='light'){
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
  else{
    btn.setAttribute('class', 'light');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
});
