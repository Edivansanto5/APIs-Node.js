function generacao(age){
    return 2016 - age
}

function generacaoDescricao(name,surName,age){
    const fullName = `${name},${surName}`
    const bornDate = generacao(age)

    return `${fullName} is ${age} old and born in ${bornDate}`
}