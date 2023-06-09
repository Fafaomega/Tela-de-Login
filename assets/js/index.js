const usuario = document.querySelector('.usuario');
const password = document.querySelector('#senha');

const login = document.querySelector('.login');
const cadastrar = document.querySelector('.conta-nova');

function limpaBarra() {
    usuario.value = '';
    password.value = '';
    usuario.focus();
}

let saveEmail = [];
let saveSenha = [];

// login.addEventListener('keypress', (e) => {
//     if(e.keycode === 13){
//         alert('a');
//     }
// })

login.addEventListener('click', (e) => {

    const mensagemErro = document.querySelector('.mensagem');
    const email = usuario.value;
    const senha = password.value;

    if (saveEmail.includes(email) && saveSenha.includes(senha)) {
        window.location.href = 'logado.html';
    } else {
        mensagemErro.innerHTML = 'Email ou Senha inválidos!'
        mensagemErro.classList.remove('certo');
        usuario.classList.add('errado');
    }

    limpaBarra();
});

cadastrar.addEventListener('click', (e) => {

    const mensagemDeCadastro = document.querySelector('.mensagem');
    const email = usuario.value;
    const senha = password.value;

    if (email == '' || senha == '') {
        mensagemDeCadastro.classList.remove('certo');
        mensagemDeCadastro.innerHTML = 'Dados inseridos inválidos!';
    };

    if (email != '' && senha != '') {
        
        saveEmail = JSON.parse(localStorage.getItem("salvarEmail")) || [];
        saveSenha = JSON.parse(localStorage.getItem("salvarSenha")) || [];

        if (saveEmail.includes(email)) {
            mensagemDeCadastro.classList.remove('certo');
            mensagemDeCadastro.innerHTML = 'Email ja registrado!';
            limpaBarra();
            return;
        };

        saveEmail.push(email);
        saveSenha.push(senha);

        localStorage.setItem("salvarEmail", JSON.stringify(saveEmail));
        localStorage.setItem("salvarSenha", JSON.stringify(saveSenha));

        mensagemDeCadastro.classList.add('certo');
        mensagemDeCadastro.innerHTML = 'Conta Criado com sucesso';
        limpaBarra();
    };


    limpaBarra();
});