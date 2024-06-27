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
    res.innerHTML= ``
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
    if(valores.length == 0){
        alert`Informe um valor antes de finalizar!`
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if( valores[pos] < menor){
                menor = valores[pos]
            }
        soma += valores[pos]
        media = soma / total
        }

        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}





