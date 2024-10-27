document.getElementById('button').addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const fullName = document.getElementById('fullName').value;
    const userPasswords = document.getElementById('userPasswords').value;
    const ReuserPasswords = document.getElementById('ReuserPasswords').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    if(userPasswords === ReuserPasswords)alert('Successfully')
    else alert('Passwords do not match')


});
