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
    userIcon.src = "icons8-user-male.svg"
} else {
    userIcon.src = "icons8-female-user.svg"

}


// Edit Profile


primaryProfile.find((user) => {
    if (user) {
        fn.value = user.Firstname
        ln.value = user.Lastname
        em.value = user.Email
        tl.value = user.PhoneNo
        pw.value = user.Password

    }
})





let names = /[a-z A-Z]{1,}/
let validateEmail = /^[\w]{1,}[\@][a-z]{5,}[\.][\a-z]{3,}/
let telBvn = /[\d]{11}/
let password = /[^~,]{6,15}/

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


tl.addEventListener("blur", () => {
    let validateTel = telBvn.test(tl.value)
    if (validateTel == false) {
        swal({
            title: "Invalid Phone Number",
            icon: "error",
            button: "Ok",
        });
    }
})

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


//Button

const upDate = () => {
    let validateName = names.test(fn.value)
    let validatelastname = names.test(ln.value)
    let validateMail = validateEmail.test(em.value)
    let validatepassword = password.test(pw.value)
    let validateTel = telBvn.test(tl.value)


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

    if (validateTel == false) {
        swal({
            title: "Invalid Phone Number",
            icon: "error",
            button: "Ok",
        });
    }


    else if(validatepassword == true&&(validateName == true&&validateMail == true&&validateTel == true) ){
        primaryProfile.find((user) => {
            if (user) {
                user.Firstname = fn.value
                user.Lastname = ln.value
                user.Email = em.value
                user.PhoneNo = tl.value
                user.Password = pw.value

            }
        })
        localStorage.setItem("primaryprofile", JSON.stringify(primaryProfile))
        window.location.href = "userProfile.html"
    }


}