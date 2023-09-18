document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const initialOffset = navbar.offsetHeight; 

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= initialOffset) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
        } else {
            navbar.style.position = 'relative';
        }
    });
});
