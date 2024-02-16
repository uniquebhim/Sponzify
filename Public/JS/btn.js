var loginButton = document.getElementsByClassName('login');
var signupButton = document.getElementsByClassName('signup');

loginButton.addEventListener('click', function() {
    window.location.href = '/login'; 
});

signupButton.addEventListener('click', function() {
    window.location.href = '/recipient'; 
});