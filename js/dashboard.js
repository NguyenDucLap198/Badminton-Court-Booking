function loadDashboard(){

let bookings=JSON.parse(localStorage.bookings)

document.getElementById("totalBooking")
.innerText="Tổng số lịch đặt: "+bookings.length

}

loadDashboard()