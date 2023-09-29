var btn = document.querySelector("#botao");
var container = document.querySelector("#container");
var input = document.querySelector("#email");
var sucess = document.querySelector(".sucess");
var emailDigitado = document.querySelector("#emailDigitado");

btn.addEventListener("click", () => {
  if (input.validity.valid) {
    container.style.display = "none";
    sucess.style.display = "flex";
    sucess.style.flexDirection = "column";
    emailDigitado.innerHTML = input.value;
    input.value = "";
    input.style.borderColor = "grey";
    input.style.backgroundColor = "white";
  } else {
    return;
  }
});

var btnSucess = document.querySelector("#btn-sucess");

btnSucess.addEventListener("click", () => {
  if (container.style.display == "none") {
    sucess.style.display = "none";
    container.style.display = "flex";
  } else {
    return;
  }
});


var corpo = document.querySelector('html')
var img = document.querySelector('#ilustracao')
var divImg = document.querySelector('#div_image')

if(corpo.clientWidth < 960){
  img.classList.remove('.height')
  divImg.classList.remove('.height')
}else{
  console.log('erro');
}

console.log(corpo);


