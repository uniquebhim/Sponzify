var recipientButton = document.getElementById('recipient');
var sponsorButton = document.getElementById('sponsor');
var sign_button=document.getElementById('sign_btn');

recipientButton.addEventListener('click', function() {
    window.location.href = './recipient'; 
});

sponsorButton.addEventListener('click', function() {
    window.location.href = './sponsor';  
});

sign_button.addEventListener('click', function() {
    alert('Account Created successfully.Thank you for signing up!');
});
// function showAlert() {
//     alert('Account Created successfully.Thank you for signing up!');
// }