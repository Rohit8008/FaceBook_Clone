
const btn=document.querySelectorAll('.like1')
for(let i of btn)
{
     console.log(i);
     i.addEventListener('click',function(){
          i.style.color="blue";
     });
}
let requests = document.querySelector('#button-block');
let req=document.querySelector('.all-requests')
let deleterequest = document.getElementById('delete');
deleterequest.addEventListener('click', ()=>{
  req.remove();
  
})

let confirmrequest = document.getElementById('confirm');
confirmrequest.addEventListener('click', ()=>{
  deleterequest.style.display = 'none';
  confirmrequest.innerHTML = "Confirmed";
})

function logout(){
  alert("You have been logged out sucessfully.");
  location.replace("http://127.0.0.1:5500/login.html");
}


