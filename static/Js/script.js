let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        header.classList.add('hidden');
    } else {
        // Scroll hacia arriba
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});
