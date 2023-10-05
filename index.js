let buttontwo =document.querySelector(".btntwo");
let button =document.querySelector(".btn");
let email =document.getElementById("email");
let body=document.querySelector(".body");
let cardtwo=document.querySelector(".card-two");
let cardone=document.querySelector(".card");
const error=document.getElementsByClassName("error");
   console.log(email);
let valid =document.querySelector(".valid-email")

button.addEventListener("click",(eo) => {
    if(email.value=="ash@lorecompany.com"){
    eo.preventDefault();
    cardone.classList.add('anscreen');
    cardtwo.classList.remove('anscreen');
    } 
    
    else{
        eo.preventDefault();
valid.classList.remove("anscreen");
email.classList.add("error")
    }

})
buttontwo.addEventListener("click",(eo) => {
    cardtwo.classList.add('anscreen');
    cardone.classList.remove('anscreen');
    
})
