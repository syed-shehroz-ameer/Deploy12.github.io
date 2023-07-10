// ================================ toggle icon navbar =================================  
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

meniIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

// ================================ srcoll sections active links =================================  

let sections = docoment.querySelectorAll('section');
let navlinks = docoment.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // ================================ sticty navbar =================================  
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrolly > 100);

//  ==================== remove toggle icon and navbar when click navbar link (scroll) ================== 
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');


};


















