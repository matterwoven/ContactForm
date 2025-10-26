let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let emailAddress = document.getElementById('emailAddress');
let linkedInURL = document.getElementById('linkedInURL');
let howDidWeMeet = document.getElementById('howDidWeMeet');
let addToMailList = document.getElementById('addToMailList');

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    let valid = true;


    if (firstName.value.trim() === '') {
        document.getElementById('fname-error').style.opacity = '100%';
        valid = false;
    }

    if (lastName.value.trim() === '') {
        document.getElementById('lname-error').style.opacity = '100%';
        valid = false;
    }

    if (addToMailList.checked) {
        if (emailAddress.value.trim() === '' || !emailAddress.value.includes("@") || !emailAddress.value.includes(".")) {
            document.getElementById('email-error').style.opacity = '100%';
            valid = false;
        }
    }

    if (linkedInURL.value.trim() !== '') {
        if (!linkedInURL.value.trim().includes("https://linkedin.com/in/")) {
            document.getElementById('linkedInUrl-error').style.opacity = '100%';
            valid = false;
        }
    }

    if (howDidWeMeet.value.trim() === '') {
        document.getElementById('howDidWeMeet-error').style.opacity = '100%';
        valid = false;
    }

    if (valid === true) {
        form.submit(); 
        document.getElementById('first-name-error').style.opacity = '0%';
        document.getElementById('last-name-error').style.opacity = '0%';
        document.getElementById('email-error').style.opacity = '0%';
        document.getElementById('linkedInURL-error').style.opacity = '0%';
        document.getElementById('howDidWeMeet-error').style.opacity = "0%";
    }
    
    event.preventDefault();
});