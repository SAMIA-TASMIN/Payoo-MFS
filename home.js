const validPin = 1234;
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-amount').value)
    const pin = parseInt(document.getElementById('add-pin').value)
    const availableBalance = parseInt(document.getElementById('available-bal').innerText)
    
    if(accountNumber.length<11){
        alert("Invalid account number")
        return;
    }

    if(pin !== validPin){
        alert("Invalid pin number")
        return;
    }

    const totalNewBalance = amount + availableBalance 
    document.getElementById('available-bal').innerText = totalNewBalance

})