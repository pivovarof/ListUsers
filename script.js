const addBtn = document.getElementById('addBtn');
const tbody = document.getElementById('tbody');
const saveBtn = document.getElementsByClassName('saveBtn');


let arrUsers;
!localStorage.arrUsers ? arrUsers = [] : arrUsers = JSON.parse(localStorage.getItem('arrUsers'));

let idRandom = () => Math.floor(Math.random() * 10000);

function addLeadZero(d) {
    return (d < 10) ? '0' + d : d;
}

function addDateUsers(t = new Date()) {
    const Y = t.getFullYear();
    const M = addLeadZero(t.getMonth() + 1);
    const D = addLeadZero(t.getDate());

    return `${D}/${M}/${Y}`

}

function UserAdd(name, email) {
    this.id = idRandom();
    this.name = name,
    this.email = email,
    this.date = addDateUsers();

}

const updatetLocal = () => {
    localStorage.setItem('arrUsers', JSON.stringify(arrUsers));
}

addBtn.addEventListener('click', () => {    
    arrUsers.push(new UserAdd());
    updatetLocal();
    fillUsersList();    
})

function addObjUsers() {
    let user = new UserAdd;
    arrUsers.push(user)
    
}
let inInput = 'type="text" class="name" name="name"'

const createUsersList = (user, index) => { 
      
     return(`<tr>
     <td>
         <input ${inInput}>
     </td>
     <td>
         <input type="email" class="email" name="email">
     </td>
     <td>${user.date}</td>
     <td>
         <button>
             <i class="fas fa-pencil-alt"></i>
         </button>
     </td>
     <td>
         <button>
             <i class="far fa-trash-alt"></i>
         </button>
     </td>
     <td>
            <button class="saveBtn activeBtn" type="submit" onclick="saveUser(${index})">Save</button>
         <button class="confBtn">Confirm</button>
     </td>
 </tr>`)
            
        
    }

const fillUsersList = () => {
    tbody.innerHTML = '';
    if(arrUsers.length > 0){
        arrUsers.forEach((item, index) => {
            tbody.innerHTML += createUsersList(item, index);
        })
    }
}

const saveUser = i => {
    const inputName = document.querySelectorAll('.name')
    const inputEmail = document.querySelectorAll('.email')
    
    arrUsers.push(new UserAdd(inputName[i].value, inputEmail[i].value))
    inInput = `type="text" class="name" name="name" readonly value=${inputName[i].value}`
    updatetLocal();
    fillUsersList();
    // arrUsers[i].name = inputName[i].value
    // arrUsers[i].email = inputEmail[i].value
    console.log(inputName[i].attributes = inInput);
}








