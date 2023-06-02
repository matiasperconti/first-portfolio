const toggleNav = document.querySelector('.main-header__btn-menu');
const navContainer = document.querySelector('.main-header__navigation-container');
const socialContainer = document.querySelector('.social__container');
const aboutSection = document.getElementById('about');
const anchors = document.getElementsByTagName('section');
const navItems = document.querySelectorAll('.navigation__link');



const deployNav = () => {
    navContainer.classList.toggle('toggle');
    socialContainer.classList.toggle('toggle2');
    toggleNav.classList.toggle('rotate');
}

toggleNav.addEventListener('click', () =>{
    deployNav();
});


const returnNav = () => {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () =>{
            deployNav();
        });
    }
}

returnNav();

// const cleanItems = () => {
//     for (let i = 0; i < navItems.length; i++){
//         navItems[i].classList.remove('selectedAnchor');
//     }
// }

// const navUpdate = (elem) =>{
//     cleanItems();
//     for (let each of elem){
//         let actualAnchor = each.getBoundingClientRect();
//         if (actualAnchor.y === 0){
//             console.log(`We are in ${each.id}`);
//             history.pushState({}, "", `#${each.id}`); 
//             let selectedLink = document.querySelector(`[href="#${each.id}"]`);
//             selectedLink.classList.add('selectedAnchor');
//         }
//     }
// }

// document.addEventListener('scroll',() =>{
//     navUpdate(anchors);
// });


