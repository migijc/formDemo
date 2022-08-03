const form=document.querySelector(".mainForm")
let allInputs= document.querySelectorAll("input")

allInputs.forEach(input=>{
    input.addEventListener("input", (e)=>{
        if(e.target.validity.valid==false){
            e.target.reportValidity()
        } 
        
        if((input.validity.valueMissing==false) && (input.validity.valid==false)){
            input.classList.add("infoError")
        } else{
            input.classList.remove("infoError")
        }

        if(e.target.id=="passwordConfirm"){
            let password=document.getElementById("password")
            let passwordValue=password.value;
            let passwordToMatch=document.getElementById("passwordConfirm")
            if(passwordValue != passwordToMatch.value){
                passwordToMatch.classList.add("invalid")
            }else{
                passwordToMatch.classList.remove("invalid")
            }
        }
    })
})


let submitButton=document.getElementById("submitButton")
submitButton.addEventListener("click", (e)=>{
    let password=document.getElementById("password")
    let passwordValue=password.value
    let passwordToMatch=document.getElementById("passwordConfirm")
    let passwordToMatchValue=passwordToMatch.value
    if(form.checkValidity()==false){
        form.reportValidity();
    }
    if(passwordValue != passwordToMatchValue){
        console.log("nope")
    }
})