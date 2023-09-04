
const container = document.querySelector(".container")
const list = document.querySelector(".lista")
const input = document.querySelector(".input")
const btnClear = document.querySelector(".btnClear")
const btnAdd = document.querySelector(".btnAdd")

//aqui eu crio uma array para guardar os valores dos inputs
let listInputs = []

window.addEventListener("DOMContentLoaded", carregarPagina)

btnAdd.addEventListener("click", add)
btnClear.addEventListener("click", clear)



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


function clear(e){
    let element = e.target.parentNode
    let container = element.parentNode
 
    let targetElement = container.querySelectorAll(".listaAdd")
    
    
    
    targetElement.forEach((e) => {
         let input = e.firstElementChild
         input.value = ""
         
     })
    
    let dados = JSON.parse(localStorage.getItem("tasks"))

    for(let i = 0; i < dados.length; i++){
         dados.splice(dados.indexOf(i),1) 
         
     }
     localStorage.setItem("tasks", JSON.stringify(dados))

}


function criarLista(valor){

     const list = document.createElement("div")
     const input = document.createElement("input")
     const btnDelete = document.createElement("button")


     input.value = valor// Add o novo valor do input no Html e localstorage
    
     btnDelete.textContent = "delete"


     list.classList.add("listaAdd")
     input.classList.add("inputAdd")
     btnDelete.classList.add("btnDeleteAdd")
     
     input.setAttribute("type", "text")
     
     list.appendChild(input)
     list.appendChild(btnDelete)
 

     //add alguns styles para os novos elementos
     input.addEventListener("mouseover",  focar)
     input.addEventListener("mouseout",  desfocar)
  
     //add funções nos botões nas listas novas
     btnDelete.addEventListener("click", removeFromlocalStorage)
  
     container.appendChild(list)
     

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
  



 