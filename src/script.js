// write your JavaScript here
const feedbackEl = document.querySelector(".feedback-btn")
const btnCancel=document.querySelector(".btn-c");
const btnSubmit=document.querySelector(".btn-b");
const closeIcon = document.querySelector(".close");
const containerEL = document.querySelector(".container");

feedbackEl.addEventListener("click",()=>{
    containerEL.classList.remove(".active")
    
})