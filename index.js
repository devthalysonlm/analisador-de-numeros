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
        alert``
    } else {
        alert``
    }   
}



//Sabemos que para buscar um valor dentro de um array utilizamos o indexOf() e dentro dos paranteses o elemento no qual queremos procurar
//Feito isso o Js vai me retornar a posição de onde vem esse valor
//