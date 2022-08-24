let myLeads = []
const inputEl = document.getElementById('input-el')
const inputButtonEl = document.getElementById('input-btn')
const leadsListElement = document.getElementById('show-leads-list')

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
inputButtonEl.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""

    for( let i = 0; i < myLeads.length; i++){
        listItems += `<li> 
                        <a href='${myLeads[i]}'target="_blank">
                            ${myLeads[i]}
                        </a>
                     </li>`
    }
    leadsListElement.innerHTML = listItems
}