function generacao(age){
    return 2022 - age
}

function generacaoDescricao(name,surName,age){
    const fullName = `${name},${surName}`
    const bornDate = generacao(age)

    return `${fullName} is ${age} old and born in ${bornDate}`
}
generacaoDescricao("Edivan","Santos",27)
console.log(generacao)