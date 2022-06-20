let idade = 18
const anoAtual = 2022
const mesAtual = 6
const diaAtual = 15
let anoEvento = 2022 
let mesEvento = 8
let diaEvento = 4
let NumerosDeConvidados = 100

console.log("Bem vindo ao evento de cadastro")
console.log("Coloque seu nome para entrar na lista")

listaParticipantes = ["Felipe","Andre", "Giovanna" , "Neymar" , "Marilia" , "Ana" , "Gustavo"]

if(listaParticipantes.length <100) {
    console.log("Seja muito bem vindo, agora vamos para proxima etapa")
} else{
    console.log("Desculpe, numeros de convidados ja foi ultrapassado")
}

console.log("Agora informe a data")

 if(anoEvento >= anoAtual && mesEvento > mesAtual && diaEvento > diaAtual) {
        console.log("A data está em dia, vamos seguir seu cadastro")
    } else{
        console.log("Desculpe a data foi expirada")
    }

    console.log("Agora informe sua idade")

    if(idade >= 18) {
        console.log("Ok, vamos conitinuar para proxima etapa")
    } else{
        console.log("Desulpe voce não tem idade para esse evento")
    }
    
    console.log("Divirta-se no evento")