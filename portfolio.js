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

document.getElementById('menu').addEventListener('click', ()=>{
    document.getElementById('sidebar').classList.add('flex');
})
document.querySelectorAll(".navLinks").forEach(linkSection =>{
    linkSection.addEventListener('click',()=>{
        console.log('adsd')
        document.getElementById('sidebar').classList.remove('flex');
    })
})
    
document.querySelector('.fa-xmark').addEventListener('click',()=> {
    document.getElementById('sidebar').classList.remove('flex');
})

/*--video--*/
var videoPlayer = document.getElementById('videoPlayer');

    // Auto play, half volume.
    videoPlayer.play()
    videoPlayer.volume = 0.5;

    // Play / pause.
    videoPlayer.addEventListener('click', function () {
        if (videoPlayer.paused == false) {
            videoPlayer.pause();
            videoPlayer.firstChild.nodeValue = 'Play';
        } else {
            videoPlayer.play();
            videoPlayer.firstChild.nodeValue = 'Pause';
        }
    });


    /*-- contact --*/

    const form = document.querySelector('.input-container');
const fullName = document.getElementById('name');
const email = document.getElementById('email')
const message = document.getElementById('message');
function sendEmail(){
    
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${Email.value}<br> Message: ${message.value}`;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jsh.seguerra@gmail.com",
        Password : "D13A7F52A29BB23DEF6515011F8D3C3D5B10",
        To : 'jsh.seguerra@gmail.com',
        From :'jsh.seguerra@gmail.com',
        Subject :"Submitted from portfolio",
        Body : bodyMessage
    }).then(
      message => alert('Thankyou!')
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})