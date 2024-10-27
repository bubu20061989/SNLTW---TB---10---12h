
document.getElementById('btnlogin').addEventListener('click', function(event){
    const username=['admin','notch','god','that']
    const password=['password','mojang123','donteatit','iscrazy']
    console.log("A")    
    let a = document.getElementById('username').value
    let b = document.getElementById('password').value
    console.log(a)
    console.log(b)
    for(i=0; i<username.length; i++){
        if(a == username[i] && b == password[i]){
            alert('Login Successful')
            break
        }
    }
});