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

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.cleaning-tab');
    const slides = document.querySelectorAll('.cleaning-slide');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // 1. Убираем активный класс у всех кнопок
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Убираем активный класс у всех слайдов
            slides.forEach(s => s.classList.remove('active'));

            // 3. Добавляем активный класс нажатой кнопке
            tab.classList.add('active');
            // 4. Показываем соответствующий слайд
            slides[index].classList.add('active');
        });
    });
});