const URL='http://localhost/ajax/api/';

let btnLoad=document.querySelector('.btn-load');
let tableData =document.querySelector('.data');


btnLoad.addEventListener('click',()=>{
  showUser();
})



const showUser = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

const response=JSON.parse(xhttp.responseText);

let data ='';

response.forEach(user => {
    data +=

`

  <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button class="btn btn-sm btn-primary">Edit</button>
          <button class="btn btn-sm btn-danger" onclick=deleteBtn(${user.id}) >Delete</button>
        </td>
      </tr>

`
});


let showdatabody=document.querySelector('#showdatabody');
let table=document.querySelector('table');
showdatabody.innerHTML=data;
tableData.classList.remove('d-none');
    }
    xhttp.open("GET",URL+"showuser.php");
    xhttp.send();
}

const deleteBtn=(id)=>{

if (confirm ('Are you sure?')){
const xttph=new XMLHttpRequest();
xttph.onload = function(){
 const response=JSON.parse (xttph.responseText);
 if(response.status=='success'){
  alert ('data deleteded');
  showUser();
 }else{
  alert('something wrong');
 }
}
xttph.open("GET",URL+"deleteuser.php?id="+id);
xttph.send();
}else{
console.log('data not delete')
}
}


