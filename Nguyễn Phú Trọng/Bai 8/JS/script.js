
document.getElementbyId("login").addeventListener('click',function(e) {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username, password);
})