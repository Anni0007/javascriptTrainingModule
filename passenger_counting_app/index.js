let peopleEntered  = document.getElementById('people-element')

let count = 0
let prevEntries = document.getElementById("previous-entry")


function increment(){
    count += 1
    peopleEntered.innerText = count
}

function save(){
    let  prevEntriesStr = count + " - "
    prevEntries.textContent += prevEntriesStr
    peopleEntered.textContent = 0
    count = 0
}