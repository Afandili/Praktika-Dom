const countTag = document.getElementById("count")
const messageTag = document.getElementById("message")
const buttonTag = document.getElementById("btn")

let count = 0
 button.addEventListener("click", function name() {
    count ++
countTag.innerText = count
    if(count === 10){
        messageTag.innerText = "Təbriklər 10 rəqəminə çatdınız"
        messageTag.style.color = "red"
    }

    if(count === 20) {
        messageTag.innerText = "Təbriklər 20 rəqəminə çatdınız"
        messageTag.style.color = "green"
    }
 })