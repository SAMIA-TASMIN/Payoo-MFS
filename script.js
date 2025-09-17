// Login funtionality
document.getElementById('loginBotten')
.addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 18936443440;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-no').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-no').value
    const pinNumberValueConverted = parseInt(pinNumberValue)
    
    if(mobileNumberValueConverted===mobileNumber&&pinNumberValueConverted===pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert('wrong mobile or pin')
    }

})