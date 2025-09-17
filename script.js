// Login funtionality
document.getElementById('loginBotten')
.addEventListener('click',function(e){
    e.preventDefault()
    const mobileNumber = 18936443440;
    const pinNumber = 1234;

    function TakeInputValue(id){
        const value = parseInt(document.getElementById(id).value)
        return value
    }

    const mobileNumberValue = TakeInputValue('mobile-no')
    
    const pinNumberValue = TakeInputValue('pin-no')

    
    if(mobileNumberValue===mobileNumber&&pinNumberValue===pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert('wrong mobile or pin')
    }

})