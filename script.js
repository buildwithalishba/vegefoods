console.log('Hello world');


// scroll navbar

window.addEventListener('scroll',function(){
    const navbar = document.getElementById('navbar');
   if(window.scrollY > 50){
            navbar.classList.add('scrolled');
    }
    else{
    navbar.classList.remove('scrolled');
    }
})

// Single Product 
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const qtyInput = document.getElementById("num");

plusBtn.addEventListener("click",()=>{
qtyInput.value = parseInt(qtyInput.value)+1;
});

minusBtn.addEventListener("click",()=>{
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value)-1;
    }
});

function hamburger() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("active");
}


