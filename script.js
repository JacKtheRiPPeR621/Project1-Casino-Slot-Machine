let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed =  document.getElementById('inpSpeed')

let values = [
    '😄', ' 🤧', ' 😭', ' 😢', ' 😠', ' 😌', ' 🤣'
]

function getrandomvalue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationid;

function updateAnimation(newspeed) {
    if(animationid) clearInterval(animationid)

    animationid = setInterval(() => {
        value1.innerText = getrandomvalue()
        value2.innerText = getrandomvalue()
        value3.innerText = getrandomvalue()
    
    }, 1000 / newspeed)
}

inpSpeed.onchange = function(ev) {

    // document.documentElement is the ":root" of css 
    document.documentElement.style.setProperty('--speed' , ev.target.value)

    updateAnimation(ev.target.value)
}