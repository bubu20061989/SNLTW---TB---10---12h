
document.getElementById("login").addEventListener('click',function(e) {

    let usernamdata ={}

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(username, password);
    if (username == 'admin' && password == '12345') {
        console.log('admin')
    }
});