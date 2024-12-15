let slider = document.querySelector('input');
let valuePlace = document.querySelector('p');
console.log(slider);
console.log(valuePlace);
valuePlace.textContent = slider.value;

slider.addEventListener('change', (event) => {
  console.log(slider.value);
  valuePlace.textContent = slider.value;
}); //앞에 type, 뒤에 listener(함수)
