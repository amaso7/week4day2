console.log(this)
const addTaskbtn = document.getElementById("addTaskbtn")
const taskTxt = document.getElementById("taskTxt")
const tasksUl = document.getElementById("tasksUl")
const taskHeader = document.getElementById("taskHeader")
const comTasks = document.getElementById("comTask")


addTaskbtn.addEventListener("click", function () {
    console.log(this)

    const task = taskTxt.value
    taskHeader.innerHTML = task
    
    const taskLI = document.createElement("li")
    taskLI.innerHTML = task
    const removeButton = document.createElement("button")

    removeButton.addEventListener("click", function () {
        
        
        tasksUl.removeChild(this.parentElement)
        
        
    })
    removeButton.innerHTML = "remove"
    taskLI.appendChild(removeButton)
    checkBox = document.createElement("checkbox")
    checkBox.addEventListener("change",function(){
    removeButton= document.createElement("button")
    removeButton.innerHTML = "remove"
    tasksUl.appendChild("comTasks")
        

    })

    tasksUl.appendChild(taskLI)
})