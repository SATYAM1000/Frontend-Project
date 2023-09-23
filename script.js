window.addEventListener("scroll", function() {
    let nav = document.querySelector('.nav');
    nav.classList.toggle("nav-bar-new", window.scrollY > 0);
}
)


let star1=document.querySelector('#star-1');
let star2=document.querySelector('#star-2');
let star3=document.querySelector('#star-3');
let star4=document.querySelector('#star-4');
let star5=document.querySelector('#star-5');
console.log(star1)

star1.addEventListener('click', function(e){
    star1.style.color="#A67F2B";
})

star2.addEventListener('click',function(e){
    star1.style.color="#A67F2B";
    star2.style.color="#A67F2B";
})

star3.addEventListener('click', function(e){
    star1.style.color="#A67F2B";
    star2.style.color="#A67F2B";
    star3.style.color="#A67F2B";
})


star4.addEventListener('click', function(e){
    star1.style.color="#A67F2B";
    star2.style.color="#A67F2B";
    star3.style.color="#A67F2B";
    star4.style.color="#A67F2B";
})

star5.addEventListener('click', function(e){
    star1.style.color="#A67F2B";
    star2.style.color="#A67F2B";
    star3.style.color="#A67F2B";
    star4.style.color="#A67F2B";
    star5.style.color="#A67F2B";

})

gsap.from('#top', {
    y: 200,
    duration:10, // Increase the duration to slow down the animation
    ease: "slow",
    
    
    scrollTrigger: {
        start: "230% 80%",
        end: "250% 80%",
        markers: false,
        scrub: true,
        
        
    
    }
});

gsap.from('#bottom', {
    y: 200,
    duration:10, // Increase the duration to slow down the animation
    ease: "slow",
    
    
    scrollTrigger: {
        start: "250% 80%",
        end: "290% 80%",
        markers: false,
        scrub: true,
        
        
    
    }
});

let whatsapp = document.querySelector('#whatsapp');

let changeBackground = function () {
    if (whatsapp.style.backgroundColor === 'rgb(255, 255, 255)') {
        whatsapp.style.backgroundColor = '#000';
    } else {
        whatsapp.style.backgroundColor = '#fff';
    }
}

setInterval(changeBackground, 1000);

let whatsappChat=document.querySelector('#whatsapp-chat');
console.log(whatsappChat);

let whatsappIcon=document.querySelector('.ri-whatsapp-fill');
console.log(whatsappIcon);

whatsappIcon.addEventListener('click',function(e){

    if(whatsappChat.style.display==="inline-block"){
        whatsappChat.style.display="none";
    }
    else{
        whatsappChat.style.display="inline-block";
    }
})



