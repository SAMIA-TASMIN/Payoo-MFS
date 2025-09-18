const validPin = 1234;

function getInputValueNumber(id){
    const inputFieldValue = parseInt(document.getElementById(id).value)
    return inputFieldValue
}

function getInputValue (id){
    const inputField = document.getElementById(id).value
    return inputField
}

function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText)
    return element

}

function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-bal")
    availableBalanceElement.innerText = value
}


document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    const bank = getInputValue('bank')
    const accountNumber = getInputValue('account-number')
    const amount = getInputValueNumber('add-amount')
    const pin = getInputValueNumber('add-pin')
    const availableBalance = getInnerText('available-bal')
    
    if(accountNumber.length<11){
        alert("Invalid account number")
        return;
    }

    if(pin !== validPin){
        alert("Invalid pin number")
        return;
    }

    const totalNewBalance = amount + availableBalance 
    setInnerText(totalNewBalance)

})

document.getElementById("withdraw-btn").addEventListener('click',function(e){
    e.preventDefault()

    const amount = getInputValueNumber("withdraw-amount")
    const availableBalance = getInnerText("available-bal")

    const totalNewBalance = availableBalance - amount
    console.log(totalNewBalance)

    setInnerText(totalNewBalance)
})


document.getElementById("add-botten").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById("add-money-section").style.display = "block"
})


document.getElementById("cashout-button").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById("cash-out-section").style.display = "block"
})

document.getElementById("transfer-money-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById("transfer-money-section").style.display = "block"
})

document.getElementById("get-bonus-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById("get-bonus-section").style.display = "block"
})

document.getElementById("pay-bill-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById("pay-bill-section").style.display = "block"
})

document.getElementById("transaction-btn").addEventListener('click',function(){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById("transaction-section").style.display = "block"
})