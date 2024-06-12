function scroll() {
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function(){
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-op');
            
        }else{
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-op');
        }
    });
}

document.addEventListener("DOMContentLoaded", scroll);
