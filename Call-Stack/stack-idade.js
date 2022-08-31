function gerarDataNascimentoIdade(age){
    return 2022 - age
};

function gerarDescriçãoDoUsuário(nome,sobreNome,age){
    const nomeCompleto = `${nome},${sobreNome}`
    const dataDeNascimento = gerarDataNascimentoIdade(age)
}