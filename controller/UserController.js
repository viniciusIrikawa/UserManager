class UserController{

    constructor(formId, tableId){
        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();
        
    }   
    counterRows(){
        const counterUsers = document.querySelector('#counter-users')
        const tbody = document.querySelector('#table-users').rows.length
    
        counterUsers.innerHTML = tbody;
    
    }
    
    onSubmit(){
        this.formEl.addEventListener('submit', (event) => {
            event.preventDefault();
            this.counterRows();    
            
            let values = this.getValues();

            this.getPhoto((content) => {
                values.photo = content

                this.addLine(values)

            });

            
        });
        
    }
    getPhoto(callback){
        let fileReader = new FileReader();

        let elements = [...this.formEl.elements].filter(item => {
            if (item.name === 'photo'){
                return item;

            }

        })

        let file = elements[0].files[0];

        fileReader.onload = () => {
            callback(fileReader.result);

        };

        fileReader.readAsDataURL(file);
    }

    addLine(dataUser){

        this.tableEl.innerHTML= `
        <tr>
            <td>
                <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
            </td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>`

    }

    getValues(){
        let obj = {};

        [...this.formEl.elements].forEach(function (field, index){
            if(field.name == 'gender'){
                if(field.checked){
                    obj[field.name] = field.value;
                }

            }else{
                obj[field.name] = field.value;
            }
        });
            
        return new User(
            obj.name, 
            obj.gender, 
            obj.birth, 
            obj.country, 
            obj.email, 
            obj.password, 
            obj.photo, 
            obj.admin
        );
    
        // this.addLine(objectUser)

    }




}