const LABELS = document.querySelectorAll('label');
const REQUIREDINPUTS = document.querySelectorAll('input[required]');
const NAMEINPUT = document.querySelector('input[name="userFirstName"]');
const LASTNAMEINPUT = document.querySelector('input[name="userLastName"]');
const EMAILINPUT = document.querySelector('input[name="userEmail"]');
const PASSWORD = document.querySelector('input[name="userPassword"]');
const PASSWORDCHECK = document.querySelector('input[name="confirmPassword"]');


const SUBMITBTN = document.querySelector('button');

LABELS.forEach(label => {
    let labelength = label.innerHTML.length;
    label.style.backgroundSize = `${labelength-38}px`;
})

REQUIREDINPUTS.forEach(requiredInput =>{
    requiredInput.addEventListener('input', function(){
        if (NAMEINPUT.checkValidity() && LASTNAMEINPUT.checkValidity() && EMAILINPUT.checkValidity() && PASSWORD.checkValidity() && PASSWORD.value===PASSWORDCHECK.value){
            if (!(SUBMITBTN.classList.contains('addGradient'))){
                SUBMITBTN.classList.add('addGradient');
            }
            
        }
        else{
            if (SUBMITBTN.classList.contains('addGradient')){
                SUBMITBTN.classList.remove('addGradient');
            }
        }
    })
})




/* if (requiredInput.checkValidity()){
    requiredInput.style.outlineColor = 'green';
    }
else {
    requiredInput.style.outlineColor = 'red';
    allValidInputs = false;
} */