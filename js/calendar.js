document.addEventListener('DOMContentLoaded',function(){

let calendarEl=document.getElementById('calendar')

let bookings=JSON.parse(localStorage.bookings)

let events=bookings.map(b=>({

title:b.court+" "+b.start,

start:b.date

}))

let calendar=new FullCalendar.Calendar(calendarEl,{

initialView:'dayGridMonth',

events:events

})

calendar.render()

})