//class contato

class contato {
    constructor(nome, sobrenome,email,cpf,telefone,contato){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
            Enviar(data);
            
}

function Enviar(data) {

    console.log(data.nome)
    console.log(data.sobrenome)
    console.log(data.email)
    console.log(data.cpf)
    console.log(data.telefone)
    console.log(data.contato)
    alert('Obrigado sr(a) ' + data.nome + ' ' + data.sobrenome + ' os seus dados foram encaminhados com sucesso');
}