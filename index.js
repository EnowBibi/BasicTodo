var form1= document.getElementById("form1");
var addTodo= document.getElementById("addTodo");

var listcontainer=document.getElementById("listcontainer");
form1.addEventListener("submit",(e)=>{
  e.preventDefault();
  let line= document.createElement("li");
  line.innerHTML=addTodo.value ;
  listcontainer.appendChild(line);
  addTodo.value="";
 // delete
 let dlt = document.createElement("button");
 dlt.innerHTML="delete";
 dlt.id="deleteButton";

 line.appendChild(dlt);
 dlt.addEventListener("click",()=>{
  listcontainer.removeChild(line);
 })

  // mark as done
  line.addEventListener("click",(e)=>{
    e.preventDefault();
    line.id="done";
  })
 
})
