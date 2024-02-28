// active

const navbar = document.querySelector ('.navbar');

document.querySelector('.nav-menu').onclick = () => {
    navbar.classList.toggle('active');
};

// close

document.querySelector('.close').onclick = () => {
    navbar.classList.remove('active');
};
