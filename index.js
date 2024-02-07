let email= document.getElementById('email');
let pass1 = document.getElementById("pass1");
let fname = document.getElementById('fname');
let bt1 = document.getElementById('bt1')



let usersMail= [];

let getter=(e)=>{
 
     e.preventDefault();
     let usersDetails = {
        id : Date.now(),
        mail : email.value,
        password : pass1.value,
        firstName : fname.value
        };
   if(email.value && pass1.value ){
    usersMail.push(usersDetails)
   } else{
    alert('Enter valid details')
   }
  
     console.log(usersMail);
     document.querySelector('form').reset();
}

     document.addEventListener("DOMContentLoaded",()=>{
     bt1.addEventListener('click',getter);
})

