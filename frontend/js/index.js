document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.services-track');
        const btnPrev = document.querySelector('.slider-arrow--prev');
        const btnNext = document.querySelector('.slider-arrow--next');
        
        // Ширина карточки (254px) + отступ (12px) = 266px
        const scrollAmount = 266;

        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    });