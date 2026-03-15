let currentPaymentIndex = null
const pricePerHour = 100000

function pay(i){

currentPaymentIndex = i

let booking = bookings[i]

let start = booking.start.split(":")[0]
let end = booking.end.split(":")[0]

let hours = end - start

let total = hours * pricePerHour

document.getElementById("paymentAmount")
.innerText = "Số tiền: " + total.toLocaleString() + " VND"

document.getElementById("qrPopup").style.display="flex"

}

function closeQR(){

document.getElementById("qrPopup").style.display="none"

}

function confirmPayment(){

if(currentPaymentIndex != null){

bookings[currentPaymentIndex].status="Đã thanh toán"

localStorage.bookings = JSON.stringify(bookings)

loadBookings()

}

closeQR()

alert("Thanh toán thành công")

}