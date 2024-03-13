const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () =>{
    const form = document.getElementById('login_form')
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;

    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

function exibirPrompt() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Por favor, preencha todas as informações de login.");
  }
  }