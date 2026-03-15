let bookings = JSON.parse(localStorage.bookings)
let editIndex = -1

function loadBookings(){

bookingList.innerHTML=""

bookings.forEach((b,i)=>{

bookingList.innerHTML+=`

<tr>

<td>${b.name}</td>

<td>${b.court}</td>

<td>${b.date}</td>

<td>${b.start}-${b.end}</td>

<td>${b.status}</td>

<td>

<button onclick="pay(${i})">Pay</button>
<button onclick="editBooking(${i})">Edit</button>
<button onclick="cancelBooking(${i})">Cancel</button>

</td>

</tr>

`

})

}

bookingForm.onsubmit=function(e){

e.preventDefault()

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let court=document.getElementById("court").value
let date=document.getElementById("date").value
let start=document.getElementById("start").value
let end=document.getElementById("end").value

if(!name||!phone||!court||!date||!start||!end){

alert("Phải nhập đầy đủ thông tin")
return

}

let conflict=bookings.find((b,index)=>

index!==editIndex &&
b.court==court &&
b.date==date &&
start<b.end &&
end>b.start
)

if(conflict){

alert("Trùng giờ!")
return

}

let newBooking = {

name,
phone,
court,
date,
start,
end,
status:"Chưa thanh toán"

}

if(editIndex === -1){

bookings.push(newBooking)

}else{

bookings[editIndex] = newBooking
editIndex = -1

document.querySelector("#bookingForm button").innerText="Đặt sân"

}

localStorage.bookings = JSON.stringify(bookings)

loadBookings()

bookingForm.reset()

}

function editBooking(i){

let b = bookings[i]

document.getElementById("name").value = b.name
document.getElementById("phone").value = b.phone
document.getElementById("court").value = b.court
document.getElementById("date").value = b.date
document.getElementById("start").value = b.start
document.getElementById("end").value = b.end

editIndex = i

document.querySelector("#bookingForm button").innerText="Cập nhật"

}

function cancelBooking(i){

if(confirm("Bạn có chắc muốn huỷ lịch đặt?")){

bookings.splice(i,1)

localStorage.bookings=JSON.stringify(bookings)

loadBookings()

}

}

loadBookings()