const navMenu = document.getElementById('navMenu');
const navClose = document.getElementById('navClose');
const navToggle = document.getElementById('navToggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu');
    })
}

const navLink = document.querySelectorAll('.navLink');

function linkAction(){
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('showMenu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



const videoFile = document.getElementById('videoFile');
const videoButton = document.getElementById('videoButton');
const videoIcon = document.getElementById('videoIcon');

function playPause(){ 
    if (videoFile.paused){
        videoFile.play();
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    }
    else {
        videoFile.pause(); 
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-line');

    }
}
videoButton.addEventListener('click', playPause);

function finalVideo(){
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-line');
}
videoFile.addEventListener('ended', finalVideo);



function scrollUp(){
    const scrollUp = document.getElementById('scrollUp');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);



const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('activeLink');
        }else{
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('activeLink');
        }
    })
}
window.addEventListener('scroll', scrollActive);


const themeButton = document.getElementById('themeButton');
const darkTheme = 'darkTheme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}



// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selectedTheme', getCurrentTheme());
    localStorage.setItem('selectedIcon', getCurrentIcon());
})






































// function scrollHeader(){
//     const header = document.getElementById('header');
//     if(this.scrollY >= 100) header.classList.add('scroll-header');
//     else header.classList.remove('scroll-header');
// }
// window.addEventListener('scroll', scrollHeader);

// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2800,
//     // reset: true,
// })


// sr.reveal(`.home__data, .home__social-link, .home__info,
//            .discover__container,
//            .experience__data, .experience__overlay,
//            .place__card,
//            .sponsor__content,
//            .footer__data, .footer__rights`,{
//     origin: 'top',
//     interval: 100,
// })

// sr.reveal(`.about__data, 
//            .video__description,
//            .subscribe__description`,{
//     origin: 'left',
// })

// sr.reveal(`.about__img-overlay, 
//            .video__content,
//            .subscribe__form`,{
//     origin: 'right',
//     interval: 100,
// })

