
var mybtn = document.getElementById('btn');
mybtn.addEventListener("click",validateForm);

function validateForm(event) {
    event.preventDefault();
    let x = document.forms["contact_form"]["name"].value;
    let y = document.forms["contact_form"]["surname"].value;
    let z = document.forms["contact_form"]["email"].value;
    let name__error =  document.getElementsByClassName('name-error')[0];
    let surname__error=document.getElementsByClassName('surname-error')[0];
    let email__error=document.getElementsByClassName('email-error')[0];
    // let name__error =  window.getComputedStyle(document.getElementsByClassName('name')[0], ':after');
    // let surname__error=window.getComputedStyle(document.getElementsByClassName('surname')[0], ':after');
    // let email__error=window.getComputedStyle(document.getElementsByClassName('email')[0], ':after');
    
    
    let errorMessage=document.querySelector(".contact_errorMessage");
     
        if(x==""){
            name__error.style.visibility="visible";
        
        }else{
            name__error.style.visibility="hidden";
        }
        if(y==""){
            surname__error.style.visibility="visible";
           

        }else{
            surname__error.style.visibility="hidden";
        }
        if(z==""){
            email__error.style.visibility="visible";
           

        }else{
            email__error.style.visibility="hidden";
        }
       
    //   alert("One or more fields have an error. Please check and try again.");
    
    if (x != "" && y!="" &&z!=""){
        errorMessage.innerHTML="";
        email__error.style.visibility="hidden";
        surname__error.style.visibility="hidden";
        name__error.style.visibility="hidden";
    }
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(z.match(mailformat)))
    {
        email__error.style.visibility="visible";
        // alert("Your email is not valid.Please check and try again.")
       
        
    }else{
        email__error.style.visibility="hidden";
        errorMessage.innerHTML="";
    }
    if(x=="" ||y==""||z==""||!(z.match(mailformat))){
        if(x=="" ||y==""||z==""){
            errorMessage.innerHTML="One or more fields have an error. Please check and try again.";
        }else{
            errorMessage.innerHTML="Your email is not valid.Please check and try again.";
        }
        return false;
    }
    
  }

  