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
const phoneInput = document.getElementById('phoneInput');

phoneInput.addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, ''); // Удаляем всё, кроме цифр
    let formatted = '';

    if (!input) return e.target.value = '';

    // Если первая цифра 7 или 8, начинаем с +7
    if (['7', '8', '9'].indexOf(input[0]) > -1) {
        if (input[0] === '9') input = '7' + input;
        formatted = '+7';
        if (input.length > 1) formatted += ' (' + input.substring(1, 4);
        if (input.length >= 5) formatted += ') ' + input.substring(4, 7);
        if (input.length >= 8) formatted += '-' + input.substring(7, 9);
        if (input.length >= 10) formatted += '-' + input.substring(9, 11);
    } else {
        // Для прочих номеров (не на 7, 8, 9)
        formatted = '+' + input.substring(0, 16);
    }
    
    e.target.value = formatted;
});