

document.getElementById('loginForm').addEventListener('submit', function(event){
    alert("Please")
});
document.getElementById('getdata').addEventListener('click', function(event){
    const username = document.getElementById("exampleFormControlInput1").value;
    console.log(username)
    const date = document.getElementById("exampleFormControlInput2").value;
    console.log(date)
    const email = document.getElementById("exampleInputEmail1").value;
    console.log(email)
    const password = document.getElementById("exampleInputPassword1").value;
    console.log(password)
});

