const addBtn = document.getElementById('addBtn');
const tbody = document.getElementById('tbody');
let saveBtn = document.getElementsByClassName('saveBtn');




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
    arrUsers.push(new UserAdd('', ''));
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
         <input type="text" class="name input" name="name" value=${user.name} >
     </td>
     <td>
         <input type="email" class="email input" name="email"  value=${user.email}>
     </td>
     <td>${user.date}</td>
     <td>
         <button onclick="changeUser(${index})">
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

    
function fillUsersList() {
    tbody.innerHTML = '';
    if(arrUsers.length > 0){
        arrUsers.forEach((item, index) => {            
            tbody.innerHTML += createUsersList(item, index);
            let inputName = document.querySelectorAll('.name');
            let inputEmail = document.querySelectorAll('.email');
            saveBtn = document.getElementsByClassName('saveBtn');

            if(item.name !== '' && item.email !== ''){
                inputName[index].setAttribute('disabled', 'disabled');
                inputEmail[index].setAttribute('disabled', 'disabled'); 
                saveBtn[index].classList.remove('activeBtn');
            }
            
        })
    }
}
fillUsersList()



const saveUser = i => {
    inputName = document.querySelectorAll('.name');
    inputEmail = document.querySelectorAll('.email'); 

    arrUsers.push(new UserAdd(inputName[i].value, inputEmail[i].value))
    arrUsers.splice(i, 1)    
    updatetLocal();
    fillUsersList();       
    
}

const changeUser = i => {
    inputName = document.querySelectorAll('.name');
    inputEmail = document.querySelectorAll('.email');

    inputName[i].removeAttribute('disabled');
    inputEmail[i].removeAttribute('disabled');
    saveBtn[i].classList.add('activeBtn');
     
}






