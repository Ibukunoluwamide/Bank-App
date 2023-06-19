let primaryProfile= JSON.parse(localStorage.getItem("primaryprofile"))
let currentUser =  localStorage.getItem("currentUser")
username.innerHTML = `Hello, ${primaryProfile[currentUser].Firstname}`
let userGender = primaryProfile[currentUser].Gender
if (userGender=="Male") {
    userIcon.src = "../img/icons8-user-male.svg"
}else{
    userIcon.src = "../img/icons8-female-user.svg"
}

let balance = 10000
let balanceCurrency;
let currencyConverter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0
  });
 balanceCurrency = currencyConverter.format(balance);
userBal.innerHTML = `${balanceCurrency}`
if (balance) {
    localStorage.setItem("bal", balance)
}

let newBalance =  JSON.parse(localStorage.getItem("newBal"))

if (newBalance) {
    balance = newBalance
    balanceCurrency = currencyConverter.format(balance);
    userBal.innerHTML = `${balanceCurrency}`
    localStorage.setItem("bal", balance)
    
}else if (newBalance==0) {
    balance=0
    localStorage.setItem("bal", balance)
    userBal.innerHTML = `₦${balance}.00`    

}
// console.log(localStorage.setItem("bal", balance))


userAccountNo.innerHTML = primaryProfile[currentUser].AccountNo
let seen = false
eye.addEventListener("click",()=>{
    if (seen==false) {
        eye.classList.remove('bi-eye')
        eye.classList.add('bi-eye-slash')
        userBal.innerHTML = "*****"
        seen=true
    }else if (seen==true) {
        eye.classList.remove('bi-eye-slash')
        eye.classList.add('bi-eye')
        userBal.innerHTML = `${balanceCurrency}`
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
