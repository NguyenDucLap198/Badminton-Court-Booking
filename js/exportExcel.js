function exportExcel(){

let bookings=JSON.parse(localStorage.bookings)

let csv="Khach,San,Ngay,Gio\n"

bookings.forEach(b=>{

csv+=`${b.name},${b.court},${b.date},${b.start}-${b.end}\n`

})

let blob=new Blob([csv])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="bookings.csv"

a.click()

}