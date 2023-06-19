let userPrimaryProfile = JSON.parse(localStorage.getItem("primaryprofile"))
let currentUser = localStorage.getItem("currentUser")
let currentUserPin = userPrimaryProfile[currentUser].PIN
let currentUserPassword = userPrimaryProfile[currentUser].Password
console.log(userPrimaryProfile[currentUser].PIN)
const savePin = () => {
    if (currentUserPin != op.value) {
        swal({
            title: `Incorrect Old PIN`,
            icon: "error",
            button: "Ok",
        })
    } else if (np.value != cnp.value) {
        swal({
            title: `New PIN Does not Match`,
            icon: "error",
            button: "Ok",
        })
    }
    else {
        let userDetails = {
            Firstname: userPrimaryProfile[currentUser].Firstname,
            Lastname: userPrimaryProfile[currentUser].Lastname,
            Email: userPrimaryProfile[currentUser].Email,
            Gender: userPrimaryProfile[currentUser].Gender,
            PhoneNo: userPrimaryProfile[currentUser].PhoneNo,
            PIN: np.value,
            Password: userPrimaryProfile[currentUser].Password,
            Nationality: userPrimaryProfile[currentUser].Nationality,
            DOB: userPrimaryProfile[currentUser].DOB,
            BVN: userPrimaryProfile[currentUser].BVN,
            AccountNo: userPrimaryProfile[currentUser].AccountNo,
            Message: userPrimaryProfile[currentUser].Message,
        }
        userPrimaryProfile.splice(currentUser, 1, userDetails)
        console.log(userPrimaryProfile);
        localStorage.setItem("primaryprofile", JSON.stringify(userPrimaryProfile))
        swal({
            title: `Your New PIN is ${np.value}`,
            icon: "success",
            button: "Ok",
        }).then((result) => {
            if (result) {
                window.location.reload()
            }
        })
    }

}

// Reset Password
const savePassword = () => {
    if (currentUserPassword != oP.value) {
        swal({
            title: `Incorrect Old Password`,
            icon: "error",
            button: "Ok",
        })
    } else if (nP.value != cNP.value) {
        swal({
            title: `New Password Does not Match`,
            icon: "error",
            button: "Ok",
        })
    }
    else {
        let userDetails = {
            Firstname: userPrimaryProfile[currentUser].Firstname,
            Lastname: userPrimaryProfile[currentUser].Lastname,
            Email: userPrimaryProfile[currentUser].Email,
            Gender: userPrimaryProfile[currentUser].Gender,
            PhoneNo: userPrimaryProfile[currentUser].PhoneNo,
            PIN: userPrimaryProfile[currentUser].PIN,
            Password: nP.value,
            Nationality: userPrimaryProfile[currentUser].Nationality,
            DOB: userPrimaryProfile[currentUser].DOB,
            BVN: userPrimaryProfile[currentUser].BVN,
            AccountNo: userPrimaryProfile[currentUser].AccountNo,
            Message: userPrimaryProfile[currentUser].Message,
        }
        userPrimaryProfile.splice(currentUser, 1, userDetails)
        console.log(userPrimaryProfile);
        localStorage.setItem("primaryprofile", JSON.stringify(userPrimaryProfile))
        swal({
            title: `Your New Password is ${nP.value}`,
            icon: "success",
            button: "Ok",
        }).then((result) => {
            if (result) {
                window.location.reload()
            }
        })
    }
}


logOut.addEventListener("click", () => {
    swal({
        title: "Are you sure you want to log out?",
        icon: "warning",
        buttons: true,
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