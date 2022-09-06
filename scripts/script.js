// alert('test')
function handleClick() {
    alert('Test tombol 123')
}

// function navButton(button: HTMLElement) {
//     if button.class
// }

const homebtn = document.getElementById('navhome')
const expbtn = document.getElementById('navexp')
const edubtn = document.getElementById('navedu')
const contactbtn = document.getElementById('navcontact')

homebtn.onclick = function() {
    homebtn.className = "navbarbtn currpg"
    expbtn.className = "navbarbtn otherpg"
    edubtn.className = "navbarbtn otherpg"
    contactbtn.className = "navbarbtn otherpg"
}

expbtn.onclick = function() {
    homebtn.className = "navbarbtn otherpg"
    expbtn.className = "navbarbtn currpg"
    edubtn.className = "navbarbtn otherpg"
    contactbtn.className = "navbarbtn otherpg"
}

edubtn.onclick = function() {
    homebtn.className = "navbarbtn otherpg"
    expbtn.className = "navbarbtn otherpg"
    edubtn.className = "navbarbtn currpg"
    contactbtn.className = "navbarbtn otherpg"
}

contactbtn.onclick = function() {
    homebtn.className = "navbarbtn otherpg"
    expbtn.className = "navbarbtn otherpg"
    edubtn.className = "navbarbtn otherpg"
    contactbtn.className = "navbarbtn currpg"
}

const button = document.getElementById('bncbtn')
button.onclick = function() {
    location.href = "#exp"
}

console.log('sampe sini')