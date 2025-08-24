const inputElement = document.getElementById("input")
const div1 = document.getElementById("task1")
let task = ""
let tasksElement = []
function onAddClicked() {
    task = inputElement.value

    tasksElement.push(`<input style = "font-size:3em" type="checkbox" onchange = "onCheck(this)"> <label style = "font-size:3em;">${task}</label> <br><br>`)
    inputElement.value = ""

}


function onSubmitClick() {
        div1.innerHTML = tasksElement.join('')
}

function onCheck(checkbox) {
    if(checkbox.checked) {
        let done = confirm("Are you sure you completed this task.")
        if(!done) {
            checkbox.checked = false
        }
    }
}

