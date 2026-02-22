// Находим элементы
const modal = document.getElementById('modalOverlay');
const btn = document.querySelector('.cta-button'); // оранжевая кнопка
const closeBtn = document.querySelector('.close-modal');

// Открываем при клике
btn.onclick = function() {
    modal.style.display = "flex";
}

// Закрываем при клике на крестик
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрываем при клике мимо окна
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const nameInput = document.querySelector('input[placeholder="Ваше имя"]');

nameInput.addEventListener('input', function() {
    if (this.value.length > 0) {
        // Делаем первую букву большой, остальные не трогаем
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
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

// Блокируем удаление "+7 "
phoneInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 8 && e.target.value.length <= 4) {
        e.preventDefault();
    }
});