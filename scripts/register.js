let olaPayUsers = []
let names = /[a-z A-Z]{1,}/
let validateEmail = /^[\w]{1,}[\@][a-z]{5,}[\.][\a-z]{3,}/
let password = /[^~,]{6,15}/
fn.addEventListener('blur', () => {
    let validateName = names.test(fn.value)
    if (validateName == true) {
        fn.classList.add("is-valid")
    } else {
        fn.classList.remove("is-valid")
        swal({
            title: "Invalid First Name",
            icon: "error",
            button: "Ok",
        });
    }
})
ln.addEventListener('blur', () => {
    let validatelastname = names.test(ln.value)
    if (validatelastname == true) {
        ln.classList.add("is-valid")
    } else {
        ln.classList.remove("is-valid")
        swal({
            title: "Invalid Last Name",
            icon: "error",
            button: "Ok",
        });
    }
})
pw.addEventListener('blur', () => {
    let validatepassword = password.test(pw.value)
    if (validatepassword == true) {
        pw.classList.add("is-valid")
    } else {
        pw.classList.remove("is-valid")
        swal({
            title: "Invalid Password",
            text: "Minimum of 6 letters or number or symbols",
            icon: "error",
            button: "Ok",
        });
    }
})

em.addEventListener('blur', () => {
    let validateMail = validateEmail.test(em.value)
    if (validateMail == true) {
        em.classList.add("is-valid")
    } else {
        em.classList.remove("is-valid")
        swal({
            title: "Invalid Email address",
            icon: "error",
            button: "Ok",
        });
    }
})
pww.addEventListener("blur",()=>{
    let validatepassword = password.test(pww.value)
    if (pw.value!=pww.value || validatepassword==false) {
        pww.classList.add("is-invalid")
        swal({
                title: "Password Does not Match",
                icon: "error",
                button: "Ok",
            });
      }else{
          pww.classList.remove("is-invalid")
          pww.classList.add("is-valid")
        
      }
})
  
//Button
if (localStorage.primaryprofile) {
    olaPayUsers = JSON.parse(localStorage.getItem("primaryprofile"))
    }
const signUp = () => {
    let validateName = names.test(fn.value)
    let validatelastname = names.test(ln.value)
    let validatepassword = password.test(pw.value)
    let validateMail = validateEmail.test(em.value)
    let userDetails = {
        Firstname: fn.value,
        Lastname: ln.value,
        Email: em.value,
        Password: pw.value,
        Repassword: pww.value,
    }
   if (fn.value==""||ln.value==""||em.value==""||pw.value==""||pww.value=="") {
    swal({
        title: "Fill in all the required fields",
        icon: "error",
        button: "Ok",
    });
   }
 if(check.checked==false){
        swal({
            title: "Agree to our terms and conditions",
            icon: "error",
            button: "Ok",
        });
    }
    else if(validateName == true&&validatelastname == true&&validatepassword == true&&validateMail == true&&pw.value==pww.value ){
    olaPayUsers.push(userDetails)
    localStorage.setItem("primaryprofile", JSON.stringify(olaPayUsers))
    let userPrimaryProfile = JSON.parse(localStorage.getItem("primaryprofile"))
    window.location.href = "register2.html"
    userPrimaryProfile.find((primaryinfo,index) => {
        localStorage.setItem("currentUser", index)
    })
    fn.value=""
    ln.value=""
    em.value=""
    pw.value=""
    pww.value=""
    }
    
   
   
}
