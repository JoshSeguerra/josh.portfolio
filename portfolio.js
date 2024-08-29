window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let imageFly = document.querySelector('.image-fly');
    let imageSlide = document.querySelector('.image-slide'); 
    
    // Adjust the speed of the parallax effect
    imageFly.style.transform = `translateY(${scrollPosition * 1}px) `;

    imageSlide.style.transform = `translateX(${scrollPosition * 1.4}px)`;
})


document.querySelectorAll('.main-list-link').forEach(item => {
    item.addEventListener('mouseover', event => {
        // Remove 'active' class from all .list-link elements
        document.querySelectorAll('.list-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the corresponding .list-link element
        const target = event.currentTarget.getAttribute('data-target');
        document.querySelector(`.about-me-list-${target}`).classList.add('active');
    });
});

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

function closed(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"
    console.log('asd');

}
function showSideBar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex"
    console.log('ggg')
}
       

window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navFix a');

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});
console.log(section)
// window.addEventListener('scroll', function() {
//     const navLinks = document.querySelectorAll('.navFix a');
//     const offset = 50; // Adjust this offset value to determine when the color should change
    
//     if (window.scrollY > offset) {
//         navLinks.forEach(link => link.classList.add('scrolled'));
//     } else {
//         navLinks.forEach(link => link.classList.remove('scrolled'));
//     }
// });
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('.navFix a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offser + height) {
//             navLinks.forEach(links => {
               
//                 links.classList.remove('active');
//                 document.querySelector('navFix a [href*=' + id + ']').classList.add('active');
//             });

//         };
//     });
// };

