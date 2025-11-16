
const users = [
    { email: 'test@example.com', password: 'Test@1234' },
    { email: 'admin@example.com', password: 'Admin@5678' },
    { email: 'user@example.com', password: 'User#9876' }
];


const loginBox = document.getElementById('loginContainer');
const welcomeBox = document.getElementById('welcomeContainer');
const form = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const emailErr = document.getElementById('emailError');
const passwordErr = document.getElementById('passwordError');
const welcomeMsg = document.getElementById('welcomeMessage');
const logoutButton = document.getElementById('logoutBtn');
const toggleBtn = document.getElementById('togglePassword');
const forgotLink = document.getElementById('forgotPassword');

// Pwd requirements
const pwdRules = {
    min: 8,
    max: 16,
    hasUpper: /[A-Z]/,
    hasLower: /[a-z]/,
    hasNum: /[0-9]/,
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
};

// Validate email
function checkEmail(email) {
    if (!email.trim()) {
        return { valid: false, msg: 'Email is required' };
    }

    // Email testing
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        return { valid: false, msg: 'Please enter a valid email address' };
    }

    // Check if email exists
    const user = users.find(u => u.email === email);
    if (!user) {
        return { valid: false, msg: 'This email does not exist' };
    }

    return { valid: true, msg: '' };
}

// Validate password
function checkPassword(pwd) {
    if (!pwd) {
        return { valid: false, msg: 'Password is required' };
    }

    if (pwd.length < pwdRules.min) {
        return { valid: false, msg: 'Password must be at least 8 characters' };
    }

    if (pwd.length > pwdRules.max) {
        return { valid: false, msg: 'Password must not exceed 16 characters' };
    }

    if (!pwdRules.hasUpper.test(pwd)) {
        return { valid: false, msg: 'Password needs at least one uppercase letter' };
    }

    if (!pwdRules.hasLower.test(pwd)) {
        return { valid: false, msg: 'Password needs at least one lowercase letter' };
    }

    if (!pwdRules.hasNum.test(pwd)) {
        return { valid: false, msg: 'Password needs at least one number' };
    }

    if (!pwdRules.hasSpecial.test(pwd)) {
        return { valid: false, msg: 'Password needs at least one symbol' };
    }

    return { valid: true, msg: '' };
}

// Check if credentials match
function checkLogin(email, pwd) {
    const user = users.find(u => u.email === email);
    
    if (user && user.password === pwd) {
        return { valid: true, msg: '' };
    }

    return { valid: false, msg: 'Incorrect password' };
}

// Display error
function showError(errEl, inputEl, msg) {
    errEl.textContent = msg;
    inputEl.classList.add('error');
}

// Clear error
function clearError(errEl, inputEl) {
    errEl.textContent = '';
    inputEl.classList.remove('error');
}

// Handle form submit
function handleSubmit(e) {
    e.preventDefault();

    const email = emailField.value;
    const pwd = passwordField.value;

    // Clear errors
    clearError(emailErr, emailField);
    clearError(passwordErr, passwordField);

    // Validate email
    const emailResult = checkEmail(email);
    if (!emailResult.valid) {
        showError(emailErr, emailField, emailResult.msg);
        emailField.focus();
        return;
    }

    // Validate password
    const pwdResult = checkPassword(pwd);
    if (!pwdResult.valid) {
        showError(passwordErr, passwordField, pwdResult.msg);
        passwordField.focus();
        return;
    }

    // Check credentials
    const loginResult = checkLogin(email, pwd);
    if (!loginResult.valid) {
        showError(passwordErr, passwordField, loginResult.msg);
        passwordField.focus();
        return;
    }

    // Success! Show welcome screen
    showWelcome(email);
}

// Show welcome screen
function showWelcome(email) {
    welcomeMsg.textContent = `Welcome, ${email}!`;
    loginBox.classList.add('hidden');
    welcomeBox.classList.remove('hidden');
}

// Logout and return to login
function logout() {
    form.reset();
    clearError(emailErr, emailField);
    clearError(passwordErr, passwordField);
    welcomeBox.classList.add('hidden');
    loginBox.classList.remove('hidden');
}

// Toggle password visibility
function togglePwd() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.querySelector('.eye-icon').textContent = '🙈';
        toggleBtn.setAttribute('aria-label', 'Hide password');
    } else {
        passwordField.type = 'password';
        toggleBtn.querySelector('.eye-icon').textContent = '👁️';
        toggleBtn.setAttribute('aria-label', 'Show password');
    }
}

// Forgot password handler
function forgotPassword(e) {
    e.preventDefault();
    alert('Password reset would be implemented here.\n\nFor testing, try these accounts:\n• test@example.com / Test@1234\n• admin@example.com / Admin@5678\n• user@example.com / User#9876');
}

// Set up event listeners
form.addEventListener('submit', handleSubmit);
logoutButton.addEventListener('click', logout);
toggleBtn.addEventListener('click', togglePwd);
forgotLink.addEventListener('click', forgotPassword);

// Clear errors on input
emailField.addEventListener('input', () => {
    if (emailErr.textContent) {
        clearError(emailErr, emailField);
    }
});

passwordField.addEventListener('input', () => {
    if (passwordErr.textContent) {
        clearError(passwordErr, passwordField);
    }
});

// Show test accounts in console
console.log('Test accounts:');
users.forEach(user => {
    console.log(`• ${user.email} / ${user.password}`);
});
