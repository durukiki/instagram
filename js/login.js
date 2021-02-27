// const logo =document.querySelector('.logo')
const text = document.querySelector('.inputName')
const password = document.querySelector('.inputPassword')
const logInBtn = document.querySelector('.logInBtn')

btnUnActive()

function changeInputColor() {
    const textValue = text.value ;
    const passwordValue = password.value ;
    textValue.includes('@') && passwordValue.length >= 5 ?
    btnActive()
        : btnUnActive()
}


password.addEventListener('keyup', changeInputColor)
text.addEventListener('keyup', changeInputColor)


function btnActive(){
    logInBtn.style.background = "rgb(0,149,246)"
    logInBtn.disabled=false
}

function btnUnActive(){
    logInBtn.style.background = "rgb(178,223,252)"
    logInBtn.disabled=true
    console.log("dsa")
}