// window.onload = function (){
//     alert("Olá Mundo do Javascript Web");
// };

const btnTexto = document.querySelector("#alterar");

btnTexto.addEventListener("click", function () {
  // alert("A Função Funcionou!!!");
  
 
});

const trocarOver = document.querySelector("#alterar");

trocarOver.addEventListener("mouseover", function() {
    trocarOver.style.color = "aquamarine";
    
});

trocarOver.addEventListener("mouseout", function() {
  trocarOver.style.color = "white";
});



const  elementoIntro  =  document.querySelector ( "#nome" );
const  elementoSituacao = document.querySelector("#situacao");
const  elementoImagem  =  document.querySelector ( "#imagem" );
const  elementoBotao  =  document.querySelector ( "#alterar" );
let  Lista  =  [ 'primeiro' ,  'segundo' ,  'terceiro' , 'quarto' ,  'quinto' ,  'sexto' ];

elementoBotao.addEventListener( 'click' ,  ( )  =>  {
    if  ( elementoBotao.value ==  'primeiro' ){
        elementoImagem.src ="./assets/img/thor_irritado.png";
        elementoIntro.innerText = "THOR REVOLTS";
        elementoSituacao.innerText = "THOR Revoltado";
        elementoBotao.value = "segundo";
    } else if(elementoBotao.value == "segundo"){
      elementoImagem.src = "./assets/img/thor_geek.jpg";
      elementoIntro.innerText = "Dr. THOR - O deus trovão!";
      elementoSituacao.innerText = "THOR Irritadissímo!";
      elementoBotao.value = "terceiro"

    } else{
        elementoImagem.src ="./assets/img/thor_normal2.png";
        elementoIntro.innerText = "THOR";
        elementoSituacao.innerText = "Tranquilo";
        elementoBotao.value = "primeiro";

    }
  })

