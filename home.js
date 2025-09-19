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

function handleToggle(id){
    const forms = document.getElementsByClassName("form")

    for(const form of forms)
    {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"

}

function handleButtonToggle(id){
     const formBtns = document.getElementsByClassName("form-btn")
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-[#0808081a]")
    }

    document.getElementById(id).classList.remove("border-[#0808081a]")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")

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
    
    handleToggle("add-money-section")
    handleButtonToggle("add-botten")

})


document.getElementById("cashout-button").addEventListener('click',function(){
    handleToggle("cash-out-section")
    handleButtonToggle("cashout-button")
})

document.getElementById("transfer-money-btn").addEventListener('click',function(){
   
    handleToggle("transfer-money-section")
    handleButtonToggle("transfer-money-btn")
    
})

document.getElementById("get-bonus-btn").addEventListener('click',function(){
    handleToggle("get-bonus-section")
    handleButtonToggle("get-bonus-btn")
})

document.getElementById("pay-bill-btn").addEventListener('click',function(){
    handleToggle("pay-bill-section")
    handleButtonToggle("pay-bill-btn")
})

document.getElementById("transaction-btn").addEventListener('click',function(){
    handleToggle("transaction-section")
    handleButtonToggle("transaction-btn")
})