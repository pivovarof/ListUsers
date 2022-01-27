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

function UserAdd() {
    this.id = idRandom();
    this.name = '',
    this.email = '',
    this.date = addDateUsers();

}

const updatetLocal = () => {
    localStorage.setItem('arrUsers', JSON.stringify(arrUsers));
}

addBtn.addEventListener('click', () => {
    console.log('1');
    arrUsers.push(new UserAdd());
    updatetLocal();
    fillUsersList();    
})

function addObjUsers() {
    let user = new UserAdd;
    arrUsers.push(user)
    
}


const createUsersList = (user, index) => { 
      
     return(`<tr>
     <td>
         <input type="text" name="name">
     </td>
     <td>
         <input type="email" name="email">
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
         <button class="saveBtn activeBtn">Save</button>
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

console.log(arrUsers);








