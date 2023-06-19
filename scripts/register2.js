let array = []
let userPrimaryProfile = JSON.parse(localStorage.getItem("primaryprofile"))
let userIndex = localStorage.getItem("currentUser")
userPrimaryProfile.find((primaryinfo) => {
    fn.value = primaryinfo.Firstname
    ln.value = primaryinfo.Lastname
    em.value = primaryinfo.Email
    pw.value = primaryinfo.Password
})
console.log(userIndex)
accountNo.value = `24${Math.round(Math.random()*100000000)}`
let transactionPin = /^[\d]{4}$/
let telBvn = /[\d]{11}/


tel.addEventListener("blur", () => {
    let validateTel = telBvn.test(tel.value)
    if (validateTel == false) {
        swal({
            title: "Invalid Phone Number",
            icon: "error",
            button: "Ok",
        });
    }
})
bvn.addEventListener("blur", () => {
    let validateBvn = telBvn.test(bvn.value)
    if (validateBvn == false) {
        swal({
            title: "Invalid BVN",
            icon: "error",
            button: "Ok",
        });
    }
})




const createMyaccount = () => {
    let validateBvn = telBvn.test(bvn.value)
    let validateTel = telBvn.test(tel.value)
    let validatePin = transactionPin.test(pin.value)

    if (  dob.value == "") {
      
        swal({
            title: "Input Your Date Of Birth",
            icon: "error",
            button: "Ok",
        });
    }

      else  if ( gender.value == "gender" ) {
            swal({
                title: "Select Your Gender",
                icon: "error",
                button: "Ok",
            });
        }
        else  if (validateTel == false) {
            swal({
                title: "Invalid Phone Number",
                icon: "error",
                button: "Ok",
            });
        }
      else  if (validateBvn == false) {
            swal({
                title: "Invalid BVN",
                icon: "error",
                button: "Ok",
            });
        }
        else  if ( nat.value == "syc" ) {
            swal({
                title: "Select Your Country",
                icon: "error",
                button: "Ok",
            });
        }
  else  if(pin.value==""){
        swal({
            title: "Set Your Transaction Pin",
            icon: "error",
            button: "Ok",
        })
    }
  else  if (validatePin==false) {
        swal({
            text: "Transaction Pin Must Be 4 Digits",
            icon: "error",
            button: "Ok",
        });
    }
    
    else if(validateTel == true&&validateBvn == true&&validatePin==true){
        let userDetails = {
            Firstname: fn.value,
            Lastname: ln.value,
            Email: em.value,
            Password:  pw.value,
            DOB: dob.value,
            Gender: gender.value,
            PhoneNo: tel.value,
            BVN: bvn.value,
            Nationality: nat.value,
            PIN: pin.value,
            AccountNo: accountNo.value
        }
        userPrimaryProfile.splice(userIndex,1,userDetails)
        localStorage.setItem("primaryprofile", JSON.stringify(userPrimaryProfile))
        window.location.href = "logIn.html"
        dob.value=""
        gender.value=""
        tel.value=""
        bvn.value=""
        pin.value=""
        nat.value=""
    } 
}
