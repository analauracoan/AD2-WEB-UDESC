document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validarCampos()) {
        return;
    }

    alert('Formulário enviado com sucesso!');
});

function validarCampos() {
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const sexo = document.getElementById('sexo').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const cidade = document.getElementById('cidade').value;
    const rua = document.getElementById('rua').value;
    const uf = document.getElementById('uf').value;
    const cep = document.getElementById('cep').value;
    const celular = document.getElementById('celular').value;
    const email = document.getElementById('email').value;
    const nomePai = document.getElementById('nomePai').value;
    const nomeMae = document.getElementById('nomeMae').value;

    if (!nomeCompleto.trim()) {
        alert('Nome Completo é obrigatório.');
        return false;
    }

    if (!dataNascimento || !validarDataNascimento(dataNascimento)) {
        alert('Data de Nascimento inválida.');
        return false;
    }

    if (!sexo) {
        alert('Sexo é obrigatório.');
        return false;
    }

    if (!validarCPF(cpf)) {
        alert('CPF inválido!');
        return false;
    }

    if (!rg.trim()) {
        alert('RG é obrigatório.');
        return false;
    }

    if (!cidade.trim()) {
        alert('Cidade é obrigatória.');
        return false;
    }

    if (!rua.trim()) {
        alert('Rua é obrigatória.');
        return false;
    }

    if (!validarUF(uf)) {
        alert('UF inválida.');
        return false;
    }

    if (!validarCEP(cep)) {
        alert('CEP inválido.');
        return false;
    }

    if (!validarCelular(celular)) {
        alert('Celular inválido.');
        return false;
    }

    if (!validarEmail(email)) {
        alert('Email inválido!');
        return false;
    }

    if (!nomePai.trim()) {
        alert('Nome do Pai é obrigatório.');
        return false;
    }

    if (!nomeMae.trim()) {
        alert('Nome da Mãe é obrigatório.');
        return false;
    }

    return true;
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function validarEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}

function validarDataNascimento(dataNascimento) {
    const data = new Date(dataNascimento);
    const hoje = new Date();
    return data < hoje;
}

function validarUF(uf) {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    return estados.includes(uf.toUpperCase());
}

function validarCEP(cep) {
    return /^[0-9]{5}-[0-9]{3}$/.test(cep);
}

function validarCelular(celular) {
    return /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/.test(celular);
}
