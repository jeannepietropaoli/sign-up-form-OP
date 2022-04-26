const LABELS = document.querySelectorAll('label');
const REQUIREDINPUTS = document.querySelectorAll('input[required]');
const NAMEINPUT = document.querySelector('input[name="userFirstName"]');
const LASTNAMEINPUT = document.querySelector('input[name="userLastName"]');
const EMAILINPUT = document.querySelector('input[name="userEmail"]');
const PASSWORD = document.querySelector('input[name="userPassword"]');
const PASSWORDCHECK = document.querySelector('input[name="confirmPassword"]');
const SUBMITBTN = document.querySelector('button');
const BTNWRAPPER = document.querySelector('.subm_tc');
const NOMATCHMSESSAGE = document.querySelector('.noMatch');
let readyToSubmit = false;

LABELS.forEach(label => {
    let labelength = label.innerHTML.length;
    label.style.backgroundSize = `${labelength+95}px`;
})

REQUIREDINPUTS.forEach(requiredInput =>{
    requiredInput.addEventListener('input', function(){
        if (NAMEINPUT.checkValidity() && LASTNAMEINPUT.checkValidity() && EMAILINPUT.checkValidity() && PASSWORD.checkValidity() && PASSWORD.value===PASSWORDCHECK.value){
            if (!(SUBMITBTN.classList.contains('addGradient'))){
                SUBMITBTN.classList.add('addGradient');
                SUBMITBTN.disabled = false;

            }   
        }
        else{
            if (SUBMITBTN.classList.contains('addGradient')){
                SUBMITBTN.classList.remove('addGradient');
                SUBMITBTN.disabled = true;
            }
        }
    })
})

REQUIREDINPUTS.forEach(requiredInput =>{
    requiredInput.addEventListener('click', function(){
        requiredInput.removeAttribute('placeholder');
    })
})

PASSWORDCHECK.addEventListener('input', function(){
    (PASSWORD.value!==PASSWORDCHECK.value)? NOMATCHMSESSAGE.textContent='Passwords are not matching!':NOMATCHMSESSAGE.textContent='';
})

PASSWORD.addEventListener('input', function(){
    (PASSWORD.value!==PASSWORDCHECK.value)? NOMATCHMSESSAGE.textContent='Passwords are not matching!':NOMATCHMSESSAGE.textContent='';
})





