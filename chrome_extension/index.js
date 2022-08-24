let myLeads = []
const inputEl = document.getElementById('input-el')
const inputButtonEl = document.getElementById('input-btn')
const leadsListElement = document.getElementById('show-leads-list')
const delButtonEL = document.getElementById("del-btn")
const tabButtonEL = document.getElementById("tab-btn")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

inputButtonEl.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads(myLeads)
})

delButtonEL.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

tabButtonEL.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
    console.log("button clicked")
})


function renderLeads(leadArr) {
    let listItems = ""

    for( let i = 0; i < leadArr.length; i++){
        listItems += `<li> 
                        <a href='${leadArr[i]}'target="_blank">
                            ${leadArr[i]}
                        </a>
                     </li>`
    }
    leadsListElement.innerHTML = listItems
}