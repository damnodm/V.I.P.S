

var imagen= document.getElementById("sha");

var sha= 1;
var toma=1;



function nominho(){


var nome = document.getElementById('digitepf').value




if (nome=="vai tomar no cu" ||nome=="Vai tomar no cu" || nome=="vai se fude" || nome=="Vai se fude"){

   window.location.href = "paginas/vir.html"

}

if (nome=="Maria" || nome=="Daniel" || nome=="Pedro" || nome=="Celso"  ){

//window.location.href = "paginas/player.html"
document.getElementById('nome').innerHTML = "Bem vindo:" + nome;



document.getElementById('nome').innerHTML = "Você foi convidado a esse rpg, caso queira participar acesse esse link:" +"<a onclick=disc()>Convite </a>"


}else{

    document.getElementById('nome').innerHTML = "não registrado"
 
}


var nome = localStorage.getItem("nome");
}


function disc(){

    window.location.href = "https://discord.gg/hgqgkS4QEW";


}

function troca(){

toma+=1;

    var ativar = document.getElementById('sha');



    ativar.classList.toggle('brilho');

    var texto= document.getElementById('texto1');


    texto.classList.toggle('anfitras');



   // setTimeout(() => {



    if (sha==1){

    

imagen.src= "imgs/energia.png"

document.getElementById('texto1').innerHTML ="$$(!*@(*!@)#-12839123812831#!)(vaisefude)";

sha=0;
return sha;
    }else if (sha==0){
imagen.src= "imgs/medo.png"
sha=1;

if (toma<10){
document.getElementById('texto1').innerHTML ="Bem Vindos!";
} else if( toma>10){

    document.getElementById('texto1').innerHTML ="Vai tomar no cu";

}

return sha;
    }

//}, 500);


}
