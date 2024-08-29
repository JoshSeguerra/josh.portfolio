window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let imageFly = document.querySelector('.image-fly');
    let imageSlide = document.querySelector('.image-slide'); 
    
    // Adjust the speed of the parallax effect
    imageFly.style.transform = `translateY(${scrollPosition * 1}px) `;
    imageSlide.style.transform = `translateX(${scrollPosition * 1.4}px)`;
})
   
    const aboutMeEffects = document.querySelectorAll('.main-list-link');
    aboutMeEffects.forEach(item => {  
    item.addEventListener('click', event =>{
        document.querySelectorAll('.list-link').forEach(link =>{
            link.classList.remove('active');  
        });
        const target = event.currentTarget.getAttribute('data-target');
        document.querySelector(`.about-me-list-${target}`).classList.add('active');
    })
})





