let userPrimaryProfile = JSON.parse(localStorage.getItem("primaryprofile"))
let currentUser =  localStorage.getItem("currentUser")
console.log(userPrimaryProfile[currentUser].PIN)
const savePin = ()=>{
//    let userOldPin = userPrimaryProfile[currentUser].PIN
   userPrimaryProfile.find((user)=>{
    if (user.PIN != op.value) {
        swal({
            title: `Incorrect PIN`,
            icon: "error",
            button: "Ok",
          })
    }else if (np.value!= cnp.value) {
        swal({
            title: `New PIN Does not Match`,
            icon: "error",
            button: "Ok",
          })
    }
    else{
           user.PIN = np.value
           swal({
            title: `Your New PIN is ${user.PIN}`,
            icon: "error",
            button: "Ok",
        });
           localStorage.setItem("primaryprofile", JSON.stringify(userPrimaryProfile))
            window.location.href = "userSettings.html"

    }

   })
}

// Reset Password
const savePassword = ()=>{
    //    let userOldPin = userPrimaryProfile[currentUser].PIN
       userPrimaryProfile.find((user)=>{
        if (user.Password != oP.value) {
            swal({
                title: `Incorrect Password`,
                icon: "error",
                button: "Ok",
              })
        }else if (nP.value!= cNP.value) {
            swal({
                title: `New Password Does not Match`,
                icon: "error",
                button: "Ok",
              })
        }
        else{
               user.Password = nP.value
               localStorage.setItem("primaryprofile", JSON.stringify(userPrimaryProfile))
                window.location.href = "userSettings.html"
    
        }
    
       })
    }
    

logOut.addEventListener("click",()=>{
    swal({
        title: "Are you sure you want to log out?",
        icon: "warning",
        buttons: true ,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
         window.location.href = "logIn.html"
        } else {
           window.location.href = "userSettings.html"
        }
      });
})