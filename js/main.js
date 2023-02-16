const burger_btn=document.getElementById("burger");
const anitamation=document.querySelector('.first-ul');
const xbars=document.querySelector('.x-a');

console.dir(burger_btn);

function showNav(){
    console.log('click');

    anitamation.classList.add("active");
}


burger_btn.addEventListener('click',showNav);
xbars.addEventListener("click",function(){
    anitamation.classList.remove("active")
})