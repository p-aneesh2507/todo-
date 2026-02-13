let task=[];
function display(){
    txt.innerHTML="Tasks You Entered Are :"
    let html=""
    for (let i=0; i<task.length; i++){
        html+=`<li>${task[i]}</li>`
    }
    document.getElementById("taskList").innerHTML=html;
}
function addTask(){
    let taskin=document.getElementById("task");
    let text =taskin.value;
    if(text===""){
        task.push("No Task Entered")
        localStorage.setItem("task", JSON.stringify(task));
    }
    task.push(text);
    taskin.value="";
    // save();
    localStorage.setItem("task", JSON.stringify(task));
}
function clearall(){
    task=[];
    display();

}
// function save(){
//     localStorage.setItem("task", JSON.stringify(task));
// }
document.getElementById("addTask").addEventListener("click", addTask);
// document.getElementById("save").addEventListener("click", save);
document.getElementById("display").addEventListener("click", display);
document.getElementById("clearall").addEventListener("click", clearall);
txt=document.getElementById("text");
