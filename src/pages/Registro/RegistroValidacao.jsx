function Validacao(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@ [^\s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if (values.nome === "") {
        error.nome = "O campo nome não pode ficar em branco"
    } else {
        error.nome = ""
    }

    if (values.email === "") {
        error.email = "O campo e-mail não pode ficar em branco"
    } else {
        error.email = ""
    }

    if (values.senha === "") {
        error.senha = "O campo senha não pode ficar em branco"
    } else {
        error.senha = ""
    }

    if (values.dataNasc === "") {
        error.dataNasc = "O campo data de nascimento não pode ficar em branco"
    } else {
        error.dataNasc = ""
    }

    if (values.genero === "") {
        error.genero = "Você deve selecionar uma opção"
    } else {
        error.genero = ""
    }
    return error;
}

export default Validacao;