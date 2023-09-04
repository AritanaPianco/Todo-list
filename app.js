
const container = document.querySelector(".container")
const list = document.querySelector(".lista")
const input = document.querySelector(".input")
const btnDelete = document.querySelector(".btnDelete")
const btnAdd = document.querySelector(".btnAdd")
const btnClear = document.querySelector(".btnClear")


window.addEventListener("DOMContentLoaded", carregarPagina)


btnClear.addEventListener("click", atualizar)
btnAdd.addEventListener("click", add)


input.addEventListener("mouseover",  focar)
input.addEventListener("mouseout",  desfocar)

function focar(e){
     e.currentTarget.style.outline = "2px solid color-mix(in srgb, maroon 70%, blue 50%)"   
     
}

function desfocar(e){
     e.currentTarget.style.outline = "none"
}



function carregarPagina(){
    let dados = JSON.parse(localStorage.getItem("tasks"))
    if(dados && dados.length > 0){
          dados.forEach((element) =>{
               criarLista(element)
          })
    } 
}


function criarLista(valor){

     const list = document.createElement("div")
     const input = document.createElement("input")
     const btnDelete = document.createElement("button")
     const btnAdd = document.createElement("button")
     const btnClear = document.createElement("button")
  
     input.value = valor
    
     btnDelete.textContent = "delete"
     btnAdd.textContent = "adicionar"
     btnClear.textContent = "atualizar"
  
     
  
     list.classList.add("lista")
     input.classList.add("input")
     btnAdd.classList.add("btnAdd")
     btnClear.classList.add("btnClear")
     btnDelete.classList.add("btnDelete")
     
     input.setAttribute("type", "text")
     
     list.appendChild(input)
     list.appendChild(btnDelete)
     list.appendChild(btnAdd) 
     list.appendChild(btnClear)
     
  
     //add alguns styles para os novos elementos
     input.addEventListener("mouseover",  focar)
     input.addEventListener("mouseout",  desfocar)
  
     //add funções nos botões nas listas novas
     btnDelete.addEventListener("click", removeFromlocalStorage)
     btnAdd.addEventListener("click", add)
     btnClear.addEventListener("click", atualizar)
  
     
     container.appendChild(list)
     

}


function add(e){
  let element = e.currentTarget.parentNode
  let firsChild = element.firstElementChild
  let value = firsChild.value
  if(value !== ""){
     listInputs.push(value)
     saveLocalstorage(listInputs)
     criarLista(value)
     firsChild.value = ""

  }


}



function atualizar(){
 //////
}

function saveLocalstorage(listInputs){
    
     let jsonInput = JSON.stringify(listInputs)
     localStorage.setItem("tasks", jsonInput)
     

 }
  


function removeFromlocalStorage(e){
     let element = e.target.parentNode
     let inputValue = element.firstElementChild.value
     
    if(inputValue != ""){
         let datas = JSON.parse(localStorage.getItem("tasks"))
          
         if(datas){
              console.log(`dados antes de remove: ${datas}`)
              let index = datas.indexOf(inputValue)

        

          if(index !== -1){
               datas.splice(index,1)   
               localStorage.setItem("tasks", JSON.stringify(datas))
               console.log(`dados dps de remove: ${datas}`)

          }
         
    
         }
    
        
     }
     
     let container = element.parentNode
     container.removeChild(element)

   
}
  


//aqui eu crio uma array para guardar os valores dos inputs
let listInputs = []



 