const button = document.getElementById('myButton');
const div = document.getElementById('menu');

    button.addEventListener('click', () => {
    // плавно скрываем кнопку
    button.classList.add('fade-out');

    // плавно показываем div
    div.classList.remove('hidden');
    div.classList.add('show');
});
