const toggleBtn = document.getElementById('toggle-btn');
    const toggleOptions = document.querySelector('.toggle-options');

    toggleBtn.addEventListener('click', function() {
        toggleOptions.classList.toggle('show');
    });