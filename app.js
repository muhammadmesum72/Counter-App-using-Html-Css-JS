// Initialize the increment function
let countEl = document.getElementById("counter")
let saveEl = document.getElementById("savedCounts")
let saveBtn = document.getElementById("save")



let count = 0


const increment = () => {
    count += 1
    countEl.innerText = count
}

const decrement = () => {
    count -= 1
    countEl.innerText = count
}


const save = () => {
    let countStr = count + " : ";
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = 0
    // console.log(count)
}