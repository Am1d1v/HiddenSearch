
let search = document.querySelector(".search");
let btn = document.querySelector(".btn");
let input = document.querySelector(".input");

btn.addEventListener("click",()=>{
    input.classList.toggle("active");
    input.focus();
    btn.classList.toggle("btn_tr");
});

