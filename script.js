let captchaQuestion = '';
let correctAnswer = '';

function generateCaptcha() {
    // Generate three random numbers
    const num1 = Math.floor(Math.random() * 10) + 1; // Avoid 0 to prevent division by 0
    const num2 = Math.floor(Math.random() * 10) + 1; // Avoid 0 to prevent division by 0
    const num3 = Math.floor(Math.random() * 10) + 1; // Avoid 0 to prevent division by 0

    // Randomly select an operation
    const operations = ['+', '-', '*', '/'];
    const randomOperation1 = operations[Math.floor(Math.random() * operations.length)];
    const randomOperation2 = operations[Math.floor(Math.random() * operations.length)];

    // Ensure the second operation is not a division if num3 is 0
    if (randomOperation2 === '/' && num3 === 0) {
        num3 = Math.floor(Math.random() * 9) + 1; // Change num3 to a non-zero number
    }

    // Create the captcha question and compute the correct answer
    switch (randomOperation1) {
        case '+':
            captchaQuestion = ` ${num1} ${randomOperation1} ${num2} ${randomOperation2} ${num3}`;
            break;
        case '-':
            captchaQuestion = ` ${num1} ${randomOperation1} ${num2} ${randomOperation2} ${num3}`;
            break;
        case '*':
            captchaQuestion = ` ${num1} ${randomOperation1} ${num2} ${randomOperation2} ${num3}`;
            break;
        case '/':
            captchaQuestion = ` ${num1} ${randomOperation1} ${num2} ${randomOperation2} ${num3}`;
            break;
    }

    // Evaluate the correct answer
    try {
        correctAnswer = eval(`${num1} ${randomOperation1} ${num2} ${randomOperation2} ${num3}`).toString();
    } catch (e) {
        correctAnswer = ''; // If evaluation fails, set answer to empty
    }

    // Display the captcha question
    document.getElementById('captcha-question').textContent = captchaQuestion;
}

function verifyCaptcha() {
    const userAnswer = document.getElementById('captcha-answer').value.trim();
    const errorMessage = document.getElementById('captcha-error');

    if (userAnswer === correctAnswer) {
        // Hide the CAPTCHA verification screen
        document.getElementById('captcha-verification').style.display = 'none';
        
        // Show the main content
        document.getElementById('main-content').style.display = 'flex';
        
        // Clear any previous error message
        errorMessage.classList.add('hidden');
    } else {
        // Show an error message if the answer is incorrect
        errorMessage.textContent = 'Incorrect answer, please try again.';
        errorMessage.classList.remove('hidden');
    }
}
function resetCaptcha() {
    generateCaptcha(); // Generate a new CAPTCHA question
    document.getElementById('captcha-answer').value = ''; // Clear the input field
    document.getElementById('captcha-error').classList.add('hidden'); // Hide any previous error message
}
function toggleBiodata() {
    const biodataPopup = document.getElementById('biodata-popup');
    biodataPopup.classList.toggle('hidden');
}

function showSiteDetails(title, description, previewSrc, siteUrl) {
    document.getElementById('site-title').textContent = title;
    document.getElementById('site-description').textContent = description;
    document.getElementById('site-preview').src = previewSrc;
    document.getElementById('visit-site-button').onclick = function() {
        window.location.href = siteUrl;
    };
    document.getElementById('site-details-popup').classList.remove('hidden');
    document.getElementById('common-popup-image').classList.remove('hidden');
    document.getElementById('main-content').classList.add('blur-background');	
}

function closeSiteDetails() {
	document.getElementById('main-content').classList.remove('blur-background');
    document.getElementById('site-details-popup').classList.add('hidden');
    document.getElementById('common-popup-image').classList.add('hidden');
}


// Generate CAPTCHA when the page loads
window.onload = generateCaptcha;

document.getElementById('verify-btn').addEventListener('click', verifyCaptcha);
document.getElementById('reset-captcha-btn').addEventListener('click', resetCaptcha);