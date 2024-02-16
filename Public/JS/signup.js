var recipientButton = document.getElementById('recipient');
var sponsorButton = document.getElementById('sponsor');

recipientButton.addEventListener('click', function() {
    window.location.href = './recipient'; 
});

sponsorButton.addEventListener('click', function() {
    window.location.href = './sponsor';  
});
function showAlert() {
    alert('Account Created successfully.Thank you for signing up!');
}