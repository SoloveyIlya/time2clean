document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-pill');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Убираем класс active со всех кнопок
            categoryButtons.forEach(b => b.classList.remove('active'));
            
            // 2. Добавляем класс active нажатой кнопке
            btn.classList.add('active');

            // 3. Здесь будет логика фильтрации (в будущем)
            // const categoryId = btn.getAttribute('data-id');
            // loadPostsByCategory(categoryId);
        });
    });
});