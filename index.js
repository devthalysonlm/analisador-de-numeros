let num = window.document.querySelector('input#txtnum')
let lista = window.document.querySelector('select#lista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if(isNumber(num.value) & !inLista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert`[ERRO]! Número inválido ou já existente!`
    }
    num.value = ``
    num.focus()
}


function finalizar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    for(pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }else if( valores[pos] < menor){
            menor = valores[pos]
        }
        soma += valores[pos]
    }

    res.innerHTML = ``
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

}





//Sabemos que para buscar um valor dentro de um array utilizamos o indexOf() e dentro dos paranteses o elemento no qual queremos procurar
//Feito isso o Js vai me retornar a posição de onde vem esse valor
//Vai ser feito uma procura de indexOf da posição numeros na lista l.

//para somar os valores de um array eu vou somar minha soma que é igual a 0 mais o meu array dentro da minha contagem for.