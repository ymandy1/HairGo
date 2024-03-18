//********TOGGLE BTN************

const toggleBtn = document.getElementById('toggle-btn');
    const toggleOptions = document.querySelector('.toggle-options');

    toggleBtn.addEventListener('click', function() {
        toggleOptions.classList.toggle('show');
    });



// ********* ITEM SELECTED AFTER PRESS ***********

document.addEventListener('DOMContentLoaded', function () {
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    imageWrappers.forEach(imageWrapper => {
        imageWrapper.addEventListener('click', function () {
            // Remover a classe 'selected' de todos os botões
            imageWrappers.forEach(wrapper => wrapper.classList.remove('selected'));
            // Adicionar a classe 'selected' ao botão clicado
            this.classList.add('selected');
        });
    });
});

