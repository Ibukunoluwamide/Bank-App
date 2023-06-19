
let messageArray = []
let benefiName = /[a-z A-Z]{1,}/
let validateActNo = /[\d]{10}/
let validateAmot = /[\d]{1,}/

Bn.addEventListener("blur", () => {
   if (benefiName.test(Bn.value) == false) {
      swal({
         title: "Invalid Beneficiary's Name!",
         icon: "error",
         button: "Ok",
      });
   } else {
      Bn.classList.add("is-valid")
   }

})
bAn.addEventListener("blur", () => {
   if (validateActNo.test(bAn.value) == false) {
      swal({
         title: "Invalid Account No!",
         icon: "error",
         button: "Ok",
      });
   } else {
      bAn.classList.add("is-valid")
   }

})
amot.addEventListener("blur", () => {
   if (validateAmot.test(amot.value) == false) {
      swal({
         title: "Enter Amount",
         icon: "error",
         button: "Ok",
      });
   } else {
      amot.classList.add("is-valid")
   }

})
// Transfer
// getBalance = 1000
// let foundBal = true
// if (foundBal==true) {
//     getBalance = getBalance-newball
//     bal.innerHTML = `₦${getBalance}.00`
// }
let getBalance = JSON.parse(localStorage.getItem("bal"))
let currencyConverter2 = new Intl.NumberFormat("en-NG", {
   style: "currency",
   currency: "NGN",
   minimumFractionDigits: 0
});
let getBalanceCurrency = currencyConverter2.format(getBalance);
let foundBal = true
if (foundBal == true) {
   bal.innerHTML = `Your Balance is ${getBalanceCurrency}`
   foundBal = false
}
else if (foundBal == false) {
   getBalance = localStorage.getItem("newBal")
   bal.innerHTML = `₦${getBalance}.00`
}

let primaryProfile2 = JSON.parse(localStorage.getItem("primaryprofile"))
let currentUser2 = localStorage.getItem("currentUser")
let userPin = primaryProfile2[currentUser2].PIN

if (localStorage.newMessage) {
   messageArray = JSON.parse(localStorage.getItem("newMessage"))
}

const send = () => {
   let time = new Date().toLocaleString();
   let amount = amot.value
   let beneName = Bn.value
   let bankNo = bAn.value
   let benefiName = /[a-z A-Z]{1,}/
   let validateActNo = /[\d]{10}/
   if (benefiName.test(Bn.value) == false || validateActNo.test(bAn.value) == false || validateAmot.test(amot.value) == false) {
      swal({
         title: "Invalid Details",
         icon: "error",
         button: "Ok",
      });
   }
   else if (beneName == "") {
      swal({
         title: "Enter Beneficiary's Name!",
         icon: "error",
         button: "Ok",
      });

   } else if (bank.value == "select") {
      swal({
         title: "Select Beneficiary's Bank",
         icon: "error",
         button: "Ok",
      });
   }
   else if (bankNo == "") {
      swal({
         title: "Enter Beneficiary's Account No!",
         icon: "error",
         button: "Ok",
      });

   }
   else if (amount < 1) {
      swal({
         title: "Invalid Amount!",
         icon: "error",
         button: "Ok",
      })
   }

   else if (getBalance < amount) {
      swal({
         title: "Insufficient Funds!",
         icon: "error",
         button: "Ok",
      })
   }
   else if (userPin != pin.value) {
      swal({
         title: "Incorrect Pin!",
         icon: "error",
         button: "Ok",
      });

   }
   else if (getBalance >= amount) {
      bal.innerHTML = `₦${getBalance - amount}`
      getBalance = getBalance - amount
      let getBalanceCurrency = currencyConverter2.format(getBalance);
      let amountCurrency = currencyConverter2.format(amount);
      swal({
         title: `${amountCurrency} have been successfully transferred to ${beneName}, New Balance is ${getBalanceCurrency}`,
         icon: "success",
         button: "Ok",
      }).then((result) => {
         if (result) {
            window.location.reload()
         }
      })
      let message = {
         Amount: amot.value,
         Reciever: Bn.value,
         NewBal: getBalance,
         Time: time,
      }
      messageArray.push(message)
      let userDetails = {
         Firstname: primaryProfile2[currentUser2].Firstname,
         Lastname: primaryProfile2[currentUser2].Lastname,
         Email: primaryProfile2[currentUser2].Email,
         Gender: primaryProfile2[currentUser2].Gender,
         PhoneNo: primaryProfile2[currentUser2].PhoneNo,
         PIN: primaryProfile2[currentUser2].PIN,
         Password: primaryProfile2[currentUser].Password,
         Nationality: primaryProfile2[currentUser2].Nationality,
         DOB: primaryProfile2[currentUser2].DOB,
         BVN: primaryProfile2[currentUser2].BVN,
         AccountNo: primaryProfile2[currentUser2].AccountNo,
         Message: messageArray,
      }
      primaryProfile2.splice(currentUser2, 1,userDetails)
      console.log(primaryProfile2);
      localStorage.setItem("primaryprofile", JSON.stringify(primaryProfile2))
      //  localStorage.setItem("newMessage",JSON.stringify(array))
      localStorage.setItem("newBal", getBalance)
      amot.value = ""
      Bn.value = ""
      bAn.value = ""
      pin.value = ""

   }
}

// let time  = new Date().toLocaleString();
// console.log(primaryProfile2[currentUser2].Message)
// console.log(messageArray);
