interface ValidationValues {
    email: string;
    senha: string;
  }
  
  interface ValidationErrors {
    email?: string;
    senha?: string;
  }
  
  function Validacao(values: ValidationValues): ValidationErrors {
    const error: ValidationErrors = {};
  
    // Corrigido o padrão de expressão regular para o email e senha
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    if (values.email === "") {
      error.email = "O campo e-mail não pode ficar em branco";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email não encontrado";
    } else {
      error.email = "";
    }
  
    if (values.senha === "") {
      error.senha = "O campo senha não pode ficar em branco";
    } else if (!senha_pattern.test(values.senha)) { // Corrigido o nome da propriedade
      error.senha = "Senha não encontrada";
    } else {
      error.senha = "";
    }
  
    return error;
  }
  
  export default Validacao;
  