document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        navbarCollapse.classList.toggle('show');
    });

    // Menutup menu saat item menu diklik (opsional)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                hamburger.click();
            }
        });
    });
});

// Kode Swiper yang sudah ada
function initializeSwiper() {
    return new Swiper(".portfolio-swiper", {
        slidesPerView: window.innerWidth < 768 ? 1 : 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
}

let swiper = initializeSwiper();

window.addEventListener("resize", () => {
    if (swiper) swiper.destroy();
    swiper = initializeSwiper();
});
