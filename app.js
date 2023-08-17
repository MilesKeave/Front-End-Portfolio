// app.js

/* const navbar = document.querySelector('#NavBar');
let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);

document.getElementById("test").children[0].className += " load"; */


const nav = document.getElementById("nav");
window.onscroll = function () { 
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 25 ) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};

/*const controllLink = document.querySelectorAll(".control");


const homeLink = document.querySelector('.control-1');
const aboutLink = document.querySelector('.control-2');
const portfolioLink = document.querySelector('.control-4');

homeLink.addEventListener('click', () => {
    window.location.href = 'splash.html';
});

aboutLink.addEventListener('click', () => {
    window.location.href = 'about.html';
});

portfolioLink.addEventListener('click', () => {
    window.location.href = 'portfolio.html';
});



/*
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");


function PageTransition(){

    for( let i = 0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    allSections.addEventListener('click', (e) => {

        const id = e.target.dataset.id;
        if (id){

            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            //console.log(element);
            //console.log(element.classList);
            
            element.classList.add('active');
        

        }
    })
}

PageTransition();
*/
