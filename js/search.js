search.onkeyup=function(){

let keyword=this.value.toLowerCase()

let rows=document.querySelectorAll("#bookingList tr")

rows.forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(keyword)?"":"none"

})

}