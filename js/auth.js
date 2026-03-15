function register(){

let u=username.value
let p=password.value

if(!u||!p){
alert("Nhập đầy đủ thông tin")
return
}

let users=JSON.parse(localStorage.users)

users.push({u,p})

localStorage.users=JSON.stringify(users)

alert("Đăng ký thành công")

location.href="login.html"

}

function login(){

let u=username.value
let p=password.value

let users=JSON.parse(localStorage.users)

let found=users.find(x=>x.u==u&&x.p==p)

if(found){

localStorage.currentUser=u

location.href="dashboard.html"

}

else{

alert("Sai tài khoản")

}

}

function logout(){

localStorage.removeItem("currentUser")

location.href="login.html"

}