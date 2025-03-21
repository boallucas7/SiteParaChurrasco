function verificarLogin(){
    let usuario = document.getElementById("txtUsuario").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();
    let mensagemErro = document.getElementById("mensagemErro");

    if(usuario == "lucas" && senha == "1910"){
        alert("Login realizado com sucesso!")
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha inválidos!!");
        mensagemErro.textContent = "Usuário ou senha incorretos.";
        mensagemErro.style.color = "red";
    }

}

function cadastrar(){
    let usuario = document.getElementById("txtUsuario").value.trim();
    let senha = document.getElementById("txtSenha").value.trim();
    let dataNascimento = document.getElementById("txtdtNascimento").value;
    let tipoConta = document.getElementById("selTipoConta").value;

    if (usuario == "" || senha == "" || dataNascimento == "" || tipoConta == ""){
        alert('Todos os campos devem ser preenchidos!');
        //return
    } else {
        validarIdade(dataNascimento);
    }
}

function validarIdade(dataNascimento){
    let dataAtual = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

    if (idade < 18){
        alert('Você não é bem vindo aqui!! Mete marcha menór');
    } else {
        alert('Seja bem-vindo!');
        alert('Usuário cadastrado com sucesso!!');
        window.location.href = "login.html";
    }
}