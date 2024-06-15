const output = document.getElementById("passwordoutput");
const uppercase = document.getElementById("upper");
const lowercase = document.getElementById("lower");
const special = document.getElementById("special");
const number = document.getElementById("number");

const uppercase1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase1 = "abcdefghijklmnopqrstuvwxyz";
const number1 = "123478905";
const special1 = "!#@$&*()";

let characters = "";

function generatepassword() {
    characters = "";

    if (special.checked) {
        characters += special1;
    }
    if (number.checked) {
        characters += number1;
    }
    if (uppercase.checked) {
        characters += uppercase1;
    }
    if (lowercase.checked) {
        characters += lowercase1;
    }

    if (characters === "") {
        output.value = "Please select at least one option.";
        return;
    }

    const password = random();
    output.value = password;

    
    uppercase.checked = false;
    lowercase.checked = false;
    special.checked = false;
    number.checked = false;
}

function random() {
    let password = "";
    const passwordLength = 10; // Adjust the length as needed

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters.charAt(index);
    }

    return password;
}

async function copyPassword() {
    try {
        await navigator.clipboard.writeText(output.value);
        displayCopyMessage("✔️");
    } catch (err) {
        console.error('Failed to copy: ', err);
        displayCopyMessage('Failed to copy password.');
    }
}

function reset() {
    output.value = "";
}

function displayCopyMessage(message) {
    
    copy.textContent = message;

    // Clear the message after 2 seconds
    setTimeout(() => {
        copy.textContent = "📋";
    }, 2000);
}

// Expose functions to the global scope for use in HTML
// window.generatepassword = generatepassword;
// window.copyPassword = copyPassword;
