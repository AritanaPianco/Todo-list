
const container = document.querySelector(".container")
const list = document.querySelector(".lista")
const input = document.querySelector(".input")
const btnDelete = document.querySelector(".btnDelete")
const btnAdd = document.querySelector(".btnAdd")
const btnClear = document.querySelector(".btnClear")



//aqui eu crio uma array para guardar os elementos filhos do container
let listInputs = []

btnClear.addEventListener("click", clear)
btnAdd.addEventListener("click", add)


input.addEventListener("mouseover",  focar)
input.addEventListener("mouseout",  desfocar)

function focar(e){
    e.currentTarget.style.outline = "2px solid color-mix(in srgb, maroon 70%, blue 50%)"   
    
}

function desfocar(e){
     e.currentTarget.style.outline = "none"
}
   






function add(){

    const list = document.createElement("div")
    const input = document.createElement("input")
    const btnDelete = document.createElement("button")
    const btnAdd = document.createElement("button")
    const btnClear = document.createElement("button")
    
  
    
    
   btnDelete.textContent = "delete"
   btnAdd.textContent = "adicionar"
   btnClear.textContent = "clear"

   

   input.classList.add("input")
   input.setAttribute("type", "text")
   list.classList.add("lista")
   btnClear.classList.add("btnClear")
 
   
   list.appendChild(input)
   list.appendChild(btnDelete)
   list.appendChild(btnClear)
   btnDelete.classList.add("btnDelete")
   list.appendChild(btnAdd) 
   btnAdd.classList.add("btnAdd")
   list.appendChild(btnClear)
   
   
   container.appendChild(list)
   listInputs.push(list)
   render(btnAdd,listInputs)


   input.addEventListener("mouseover",  focar)
   input.addEventListener("mouseout",  desfocar)


   btnDelete.addEventListener("click", deletar)
   btnAdd.addEventListener("click", add)
   btnClear.addEventListener("click", clear)
}
  


function deletar(e){

     let element = e.target.parentNode
     console.log(element)

     let currentLista = listInputs.filter((lista) => lista === element)
     listInputs.splice(listInputs.indexOf(currentLista),1)
     let pai = element.parentNode
     pai.removeChild(element)
     
}

  
function clear(e){
     let target = e.currentTarget
     let father = target.parentNode
     let firstChild = father.firstElementChild
     firstChild.value = ""
  
}
  
   
function render(btnAdd,listInputs){
     
      let father = btnAdd.parentNode
      let firstChild =  father.firstChild
      
      for(let i = 0; i < listInputs.length;i++){
         let teste = listInputs.length - 1
         firstChild.setAttribute("placeholder", `Tarefa ${teste+2}`)
      }
   
}
   
 
   
   




     

    
         
   

     
     
     
     


     



           
     
      
      
      
    
             
    

      
     
       
      
      
      


      

     
     

     



          
          
     
     




          
          
          
          
            




    
     
     
     
    
    







     












     
   
     
      

   


   
      
     
   
     






















