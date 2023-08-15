/*
//Armazenar dados na chave
let chave="chave"
localStorage.setItem(chave,"Well")

let codigo = "chave1"
localStorage.setItem(codigo, "SIM")

let leritem = localStorage.getItem(codigo);
console.log(leritem)

//localStorage.removeItem(chave)
localStorage.clear()
*/

//LISTA DE USUARIOS
let listaDados = [];

//Criando a base (Construtor)
function Campos(campo1,campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}


//Diaparar o Botão com o Dom
const btnEnviar = document.querySelector("#btnSubmit")

//Evento do clique
btnEnviar.addEventListener("click", ()=>{
    const inputCampo1 = document.querySelector("#campo1");
    const inputCampo2 = document.querySelector("#campo2");
    
    //Instanciando o objeto para receber no campo
    let info = new Campos(inputCampo1.value, inputCampo2.value)

    //Pega tudo que estiver dentro do lista dados
    listaDados.push(info);
    
    //Armazena tudo que for adicionado na lista dados convertido com JSON
    localStorage.setItem("dados", JSON.stringify(listaDados))
})

