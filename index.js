const inputElement = document.getElementById("input")
const div1 = document.getElementById("task1")
let task = ""
let tasksElement = []

//Pushed all the created inputs and labels into the tasksElement array, which are used in onSubmitClick function.
function onAddClicked() {
    task = inputElement.value

    //V.IMP Using this here which helps to map to that checkbox which is checked, as we dont have unique id we are pass this as the attribute.
    tasksElement.push(`<input style = "font-size:3em" type="checkbox" onchange = "onCheck(this)"> <label style = "font-size:3em;">${task}</label> <br><br>`)
    inputElement.value = ""

}

//Displays all the tasks
function onSubmitClick() {
        div1.innerHTML = tasksElement.join('')
}

//Creates a confirm box to alert user
function onCheck(checkbox) {
    if(checkbox.checked) {
        let done = confirm("Are you sure you completed this task.")
        if(!done) {
            checkbox.checked = false
        }
    }
}

