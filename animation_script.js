const button = document.getElementById('myButton');
const div = document.getElementById('menu');

button.addEventListener('click', () => {
    if (div.classList.contains('hidden')) {
                            // ?>:070BL
        div.classList.remove('hidden');
        div.classList.add('show');
        button.textContent = 'Отмена';
    } else {
                            // A:@KBL
        div.classList.remove('show');
        div.classList.add('hidden');
        button.textContent = 'Журнал';
    }
});
