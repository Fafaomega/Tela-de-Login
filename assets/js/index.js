const usuario = document.querySelector('#usuario');
const password = document.querySelector('#senha');

const login = document.querySelector('.login');
const cadastrar = document.querySelector('.conta-nova');

function limpaBarra (){
    usuario.value = '';
    password.value = '';
    usuario.focus();
}

let saveEmail = [];
let saveSenha = [];

login.addEventListener('click', (e) => {

    const email = usuario.value;
    const senha = password.value;

    if (saveEmail.includes(email) && saveSenha.includes(senha)){
        window.location.href = 'logado.html';
    } else {
        alert("Email ou senha inseridos incorretos!");
    }
    limpaBarra();
});

cadastrar.addEventListener('click', (e) => {

    const email = usuario.value;
    const senha = password.value;

    saveEmail = JSON.parse(localStorage.getItem("salvarEmail")) || []; 
    saveSenha = JSON.parse(localStorage.getItem("salvarSenha")) || [];

    if (saveEmail.includes(email)){
        alert("Email ja registrado!");
        limpaBarra();
        return;
    };

    saveEmail.push(email);
    saveSenha.push(senha);

    localStorage.setItem("salvarEmail", JSON.stringify(saveEmail));
    localStorage.setItem("salvarSenha", JSON.stringify(saveSenha));

    alert("Conta criada com sucesso!");

    limpaBarra();
});
