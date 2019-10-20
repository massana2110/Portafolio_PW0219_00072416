let carnet_field = document.querySelector('#carnet_field')
let schedule_dropdown = document.querySelector('#schedule_field')
let late_switch = document.querySelector('#late_switch')
let submit_btn = document.querySelector('#submit_btn')

let table_body = document.querySelector('#table_body')
let carnet_regex = new RegExp('^[0-9]{8}$')

let rows = []
let cont = 0

let addStudent = (carnet, schedule, late)=> {
    let new_row = document.createElement('tr')
    let datetime = new Date()

    rows.push({
        id: cont,
        carnet: carnet,
        schedule: schedule,
        late: late
    })

    new_row.className = 'table_active'
    new_row.innerHTML = `
    <th scope = 'row'> ${carnet} </th>
    <td> ${schedule} </td>
    <td> ${datetime.toLocaleString()} </td>
    <td> ${late} </td>`

    let cell = document.createElement("td")
    let deleteBtn = document.createElement("button")

    deleteBtn.classList.add("btn")
    deleteBtn.classList.add("btn-danger")

    deleteBtn.innerText="Drop";
    deleteBtn.value = cont;

    let cellConfirm = document.createElement("td")
    let inputConfirm = document.createElement("input")

    inputConfirm.id = cont
    inputConfirm.setAttribute("type","text");
    inputConfirm.setAttribute("maxlength","8");

    deleteBtn.addEventListener("click",function(event){
        let idElement = event.srcElement.value;
        let rowToDelete = document.querySelector(`button[value= '${idElement}' ]`).parentElement.parentElement;
        let Confirm_carnet = document.querySelector(`input[id= '${idElement}' ]`);
        let carnetConfirm = Confirm_carnet.value;

        if(carnetConfirm === carnet){
            table_body.removeChild(rowToDelete);
        }
        rows.forEach((item,index)=>{
            if(item.id == idElement){
               rows.splice(index,1);
            }
        })
    })

    cell.appendChild(deleteBtn)
    new_row.appendChild(cell)

    cellConfirm.appendChild(inputConfirm)
    new_row.appendChild(cellConfirm)

    table_body.appendChild(new_row)
    cont++
}

let parseLateSwitch = (value) => {
    if (value) {
        return 'Tardisimo'
    }
    return 'A tiempo'
}

submit_btn.addEventListener('click', ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    if (carnet_regex.test(carnet)) {
        addStudent(carnet,schedule,late)
    } else {
        alert('Formato de carnet no valido')
    }
})

carnet_field.addEventListener('keyup', (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if (keyCode == 13) {
        submit_btn.click()
    }

    if (carnet_regex.test(carnet)) {
        submit_btn.disabled = false
    } else {
        submit_btn.disabled = true
    }
})