let sliderElement=document.querySelector("#slider");
let buttonelement=document.querySelector("#button");

let sizepassword=document.querySelector("#valor");
let password=document.querySelector("password");


let containerpassword=document.querySelector("#container-password");

let charset="a1b2c3d4e5f6g7h8i9j9@#";
let novaSenha="";

sizepassword.innerHTML=sliderElement.value;


sliderElement.oninput=function(){
    sizepassword.innerHTML=this.value;
}


function generatepassword(){

   let pass = " ";

   for(let i=0, n= charset.length;i<sliderElement.value;++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
    }
}



function generatepassword(){
    alert("SENHA GERADA COM SUCESSO!")
}