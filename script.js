// Ждем, пока страница полностью загрузится
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalOverlay');
    const btn = document.querySelector('.cta-button'); 
    const closeBtn = document.querySelector('.close-modal');

    // Проверяем, существуют ли элементы, чтобы не было ошибок в консоли
    if (btn && modal) {
        btn.onclick = function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Запрещаем прокрутку сайта под окном
        }
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Возвращаем прокрутку
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});