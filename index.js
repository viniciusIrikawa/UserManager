const fields = document.querySelectorAll('#form-user-create [name]');
const obj = {};


const counterRows = () => {
    const counterUsers = document.querySelector('#counter-users')
    const tbody = document.querySelector('#table-users').rows.length

    counterUsers.innerHTML = tbody;

}

const addLine = (dataUser) => {
    // console.log(dataUser)

    let lineTable = document.createElement('tr');
    lineTable.innerHTML = `
    <tr>
        <td>
            <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
        </td>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>${obj.admin}</td>
        <td>${obj.birth}</td>
        <td>
            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
        </td>
    </tr>`
    
    document.getElementById('table-users').appendChild(lineTable);



    // document.getElementById('table-users').innerHTML= `
    // <tr>
    //     <td>
    //         <img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm">
    //     </td>
    //     <td>${obj.name}</td>
    //     <td>${obj.email}</td>
    //     <td>${obj.admin}</td>
    //     <td>${obj.birth}</td>
    //     <td>
    //         <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
    //         <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
    //     </td>
    // </tr>`

}

document.getElementById('form-user-create').addEventListener('submit', (event) => {
    event.preventDefault();
    
    fields.forEach((field, index) => {
        if(field.name == 'gender'){
            
            if(field.checked){
                obj[field.name] = field.value;
            }
        }else{
            obj[field.name] = field.value;
        }
    });
    
    var objectUser = new User(
        obj.name, 
        obj.gender, 
        obj.birth, 
        obj.country, 
        obj.email, 
        obj.password, 
        obj.photo, 
        obj.admin
    );

    addLine(objectUser)
    counterRows();    
});



