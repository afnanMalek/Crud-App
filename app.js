
let object_array=[];

const submit_btn = document.getElementById('btn');
submit_btn.onclick = () => {
  
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const roll_num = document.getElementById('roll_num');

if(first_name.value && last_name.value && roll_num.value){
  let obj={
    firstName:first_name.value,
    lastName:last_name.value,
    rollNumber:roll_num.value
  }    
  
  object_array.push(obj);
  console.log(object_array);
  update_table();
  
  reset();

  }
}

const update_table=()=>{
 const table_body=document.getElementById("table_body");

 table_body.innerHTML = object_array.map((obj, index) => `
    <tr>
      <td>${obj.firstName}</td>
      <td>${obj.lastName}</td>
      <td>${obj.rollNumber}</td>
      <td class="table_data" id="action">
        <button class="edit_btn" index="${index}" onclick="handleEditClick(${index})" >Edit</button>
        <button class="delete_btn" data-index="${index}" onclick="handleDeleteClick(${index})">Delete</button>
      </td>
    </tr>`
  ).join('');
}

function handleDeleteClick(index){
  if(index!=null){
    object_array.splice(index,1);
    console.log(object_array);
    update_table();
  }
}

function handleEditClick(index){
  if(index!=null){
    let data=object_array[index];
    first_name.value=data.firstName;
    last_name.value=data.lastName;
    roll_num.value=data.rollNumber;

    object_array.splice(index,1);
    console.log(object_array);
  }

}


const reset = () => {
  first_name.value="";
  last_name.value="";
  roll_num.value="";
}