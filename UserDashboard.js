let primaryProfile= JSON.parse(localStorage.getItem("primaryprofile"))
let currentUser =  localStorage.getItem("currentUser")
username.innerHTML = `Hello, ${primaryProfile[currentUser].Firstname}`
let userGender = primaryProfile[currentUser].Gender
if (userGender=="Male") {
    userIcon.src = "icons8-user-male.svg"
}else{
    userIcon.src = "icons8-female-user.svg"

}

let balance = 1000
userBal.innerHTML = `₦${balance}.00`
if (balance) {
    localStorage.setItem("bal", balance)
}

let newBalance =  JSON.parse(localStorage.getItem("newBal"))
if (newBalance) {
    balance = newBalance
    userBal.innerHTML = `₦${balance}.00`
    localStorage.setItem("bal", balance)
    
}else if (newBalance==0) {
    balance=0
    localStorage.setItem("bal", balance)
    userBal.innerHTML = `₦${balance}.00`    

}
// console.log(localStorage.setItem("bal", balance))
userAccountNo.innerHTML = primaryProfile[currentUser].AccountNo
eye.innerHTML = `Total Balance <i class="bi bi-eye"></i>`
let seen = false
eye.addEventListener("click",()=>{
    if (seen==false) {
        eye.innerHTML = `Total Balance <i class="bi bi-eye-slash"></i>`
        userBal.innerHTML = "*****"
        seen=true
    }else if (seen==true) {
        eye.innerHTML = `Total Balance <i class="bi bi-eye"></i>`
        userBal.innerHTML = `₦${balance}`
        seen=false
    }
    
})

notify.addEventListener("click",()=>{
    swal({
        title: `Welcome to Ola-Pay `,
        text: "We Are Always at Your Service",
        icon: "success",
        button: "Ok",
      })
      .then(() => {
        swal({
            title: `Congrats,${primaryProfile[currentUser].Firstname}`,
            text: "Your Account has been activated",
            icon: "success",
            button: "Ok",
          })
      });
      
})



const requestMoney = ()=>{ 
    let userAmount = Number(an.value)
     if (rn.value==""||pn.value==""||userAmount=="") {
         swal({
            title: "Invalid Details",
            icon: "error",
            button: "Ok",
          });
     }
    else {
        swal({
           title: `Your Request of ₦${userAmount}.00 from ${rn.value} has been sent successfully`,
           icon: "success",
           button: "Ok",
         });
        rn.value=""
        pn.value=""
        an.value=""
     }
 }
