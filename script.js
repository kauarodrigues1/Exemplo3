//ESTRUTURA DE REPETIÇÃO
// for (let i = 0; i<10;i++){
//     console.log(i)
// }

//WHILE

// let f = 0;
// while (f < 10){
//     console.log(f)
//     f++;
// }

// //do while
// let w=0;

// do{
//     console.log(w);
// }
// while (w<5)

//funçoes

function Ola(nome){
    //strings literal ou template string ${} chama a varialvel
    // alert(`seja bem vindo a ${nome}`)
    console.log(`Seja bem vindo a ${nome}`) 
    document.write(`seja bem vindo a ${nome}`)
}
Ola("Fiap")

//arrow function

const hello=() =>(console.log('função arrow function'))
hello()

//ARRAY[], OBJETOS{} E METODOS()

let jogadores= [
    {nome: 'Huguinho', idade:17},
    {nome: 'Zezinho', idade: 18},
    {nome: 'Luizinho', idade: 19}
]

let listarJogadores = jogadores.map(function(item){
    return item.nome;
})
console.log(listarJogadores)
    
