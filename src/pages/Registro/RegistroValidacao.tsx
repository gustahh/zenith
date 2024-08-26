interface ValidationValues {
    nome: string;
    email: string;
    senha: string;
    dataNasc: string;
    genero: string;
  }
  
  interface ValidationErrors {
    nome?: string;
    email?: string;
    senha?: string;
    dataNasc?: string;
    genero?: string;
  }
  
  function Validacao(values: ValidationValues): ValidationErrors {
    let error: ValidationErrors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.nome === "") {
      error.nome = "O campo nome não pode ficar em branco";
    }
  
    if (values.email === "") {
      error.email = "O campo e-mail não pode ficar em branco";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email inválido";
    }
  
    if (values.senha === "") {
      error.senha = "O campo senha não pode ficar em branco";
    } else if (!senha_pattern.test(values.senha)) {
      error.senha = "Senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um número";
    }
  
    if (values.dataNasc === "") {
      error.dataNasc = "O campo data de nascimento não pode ficar em branco";
    }
  
    if (values.genero === "") {
      error.genero = "Você deve selecionar uma opção";
    }
  
    return error;
  }
  
  export default Validacao;
  