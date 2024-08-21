function Validacao(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@ [^\s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if (values.email === "") {
        error.email = "O campo e-mail não pode ficar em branco"
    } else if (!email_pattern.test(values.email)) { 
        error.email = "Email não encontrado"
    } else {
        error.email = ""
    }

    if (values.senha === "") {
        error.senha = "O campo senha não pode ficar em branco"
    } else if (!senha_pattern.test(values.password)) {
        error.senha = "Senha não encontrada"
    } else {
        error.senha = ""
    }
    return error;
}

export default Validacao;