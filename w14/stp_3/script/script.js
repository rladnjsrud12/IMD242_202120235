let slider = document.querySelector('#slider_1'); //.은 class, #은 id
console.log(slider);
console.log(slider.value);
let aNewdiv = document.createElement('div');
let textContents = document.createTextNode(slider.value);
aNewdiv.appendChild(textContents);
document.body.appendChild(aNewdiv);

//pre-미리 혹은 앞에
//가지고오다-get , 할당하다-set
