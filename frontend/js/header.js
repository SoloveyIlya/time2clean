// 1. Открытие/закрытие главного меню
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Опционально: блокировать прокрутку сайта
        // document.body.classList.toggle('no-scroll');
    });

    // 2. Раскрытие подпунктов (Аккордеон)
    const mobileGroups = document.querySelectorAll('.mobile-nav__group');

    mobileGroups.forEach(group => {
        const header = group.querySelector('.mobile-nav__header');
        header.addEventListener('click', () => {
            // Если нужно, чтобы при открытии одного закрывались другие - раскомментируйте код ниже:
            /*
            mobileGroups.forEach(otherGroup => {
                if (otherGroup !== group) otherGroup.classList.remove('open');
            });
            */
            group.classList.toggle('open');
        });
    });

    document.addEventListener('DOMContentLoaded', () => {

    // ... ваш существующий JS для мобильного меню ...

    // === ЛОГИКА ДЛЯ МЕГА-МЕНЮ ===
    const servicesTrigger = document.getElementById('services-menu-trigger');
    const megaMenu = document.getElementById('services-mega-menu');

    if (servicesTrigger && megaMenu) {
        servicesTrigger.addEventListener('click', (event) => {
            // Предотвращаем переход по ссылке
            event.preventDefault(); 
            
            // Переключаем классы для показа/скрытия меню и поворота стрелки
            servicesTrigger.classList.toggle('is-active');
            megaMenu.classList.toggle('is-active');
        });

        // Закрытие меню при клике вне его области
        document.addEventListener('click', (event) => {
            // Проверяем, что клик был не по триггеру и не внутри самого меню
            const isClickInsideTrigger = servicesTrigger.contains(event.target);
            const isClickInsideMenu = megaMenu.contains(event.target);

            if (!isClickInsideTrigger && !isClickInsideMenu) {
                // Если клик снаружи, убираем классы
                servicesTrigger.classList.remove('is-active');
                megaMenu.classList.remove('is-active');
            }
        });
    }

});