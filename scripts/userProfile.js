let primaryProfile = JSON.parse(localStorage.getItem("primaryprofile"))
let currentUser = localStorage.getItem("currentUser")
fnn.value = primaryProfile[currentUser].Firstname
lnn.value = primaryProfile[currentUser].Lastname
emm.value = primaryProfile[currentUser].Email
dob.value = primaryProfile[currentUser].DOB
gender.value = primaryProfile[currentUser].Gender
tel.value = primaryProfile[currentUser].PhoneNo
bvn.value = primaryProfile[currentUser].BVN
pin.value = primaryProfile[currentUser].PIN
nat.value = primaryProfile[currentUser].Nationality
let userGender = primaryProfile[currentUser].Gender
if (userGender == "Male") {
    userIcon.src = "../img/icons8-user-male.svg"
} else {
    userIcon.src = "../img/icons8-female-user.svg"

}


// Edit Profile

fn.value = primaryProfile[currentUser].Firstname
ln.value = primaryProfile[currentUser].Lastname
em.value = primaryProfile[currentUser].Email
genderr.value = primaryProfile[currentUser].Gender
tl.value = primaryProfile[currentUser].PhoneNo
natt.value = primaryProfile[currentUser].Nationality
pinn.value = primaryProfile[currentUser].PIN
bvnn.value = primaryProfile[currentUser].BVN


//Button

const upDate = () => {
    let validateEmail = /^[\w]{1,}[\@][a-z]{5,}[\.][\a-z]{3,}/
    let validateMail = validateEmail.test(em.value)
if (validateMail==true) {
    let userDetails = {
        Firstname: fn.value,
        Lastname: ln.value,
        Email: em.value,
        Gender: genderr.value,
        PhoneNo: tl.value,
        PIN: pinn.value,
        Nationality: natt.value,
        DOB: primaryProfile[currentUser].DOB,
        Password: primaryProfile[currentUser].Password,
        BVN: bvnn.value,
        AccountNo: primaryProfile[currentUser].AccountNo
    }
    primaryProfile.splice(currentUser,1,userDetails)
    console.log(primaryProfile);
    localStorage.setItem("primaryprofile", JSON.stringify(primaryProfile))
    swal({
        title: "Profile Updated!",
        icon: "success",
      })
      .then((result) => {
        if (result) {
            window.location.reload()
        }
      });
   
}else{
    Swal.fire({
        title: 'Invalid Email address',
        icon: 'error',
        confirmButtonColor: '#3085d6',
      })
}
}