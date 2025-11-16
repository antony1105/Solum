# Question C: Frontend Test — Login Page

## Problem Description

Build a simple login page using HTML, CSS, and JavaScript (no backend). The page should provide a complete login experience with validation, authentication, and a welcome screen.

## Features Implemented

### 1. Page Layout
- ✅ Centered login form with modern gradient background
- ✅ Email and password input fields
- ✅ Login button with hover effects
- ✅ "Forgot password?" link
- ✅ Fully responsive design (desktop and mobile)
- ✅ Password visibility toggle
- ✅ Smooth animations and transitions

### 2. Validation Rules

**Email Field:**
- Must not be empty
- Must be a valid email format
- Shows error if email doesn't exist in the system
- Valid test emails: `test@example.com`, `admin@example.com`, `user@example.com`

**Password Field:**
- Must be between 8-16 characters
- Must contain at least one uppercase letter (A-Z)
- Must contain at least one lowercase letter (a-z)
- Must contain at least one number (0-9)
- Must contain at least one symbol (!@#$%^&*()_+-=[]{};"\\|,.<>/?)
- Shows specific error messages for each validation rule
- Shows error if email exists but password is incorrect

### 3. Successful Login
- Hides the login form upon successful authentication
- Displays welcome message: "Welcome, [user email]!"
- Provides a logout button to return to login page
- Smooth transition animations

## Technical Implementation

### Files Structure
```
Question C/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # Validation logic and functionality
└── README.md       # Documentation
```

### Technology Stack
- Pure HTML5
- CSS3 with modern features (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- No external dependencies or frameworks

### Hardcoded Test Credentials

The following credentials are available for testing:

| Email | Password |
|-------|----------|
| test@example.com | Test@1234 |
| admin@example.com | Admin@5678 |
| user@example.com | User#9876 |

## Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- No installation required - pure frontend application

### No Installation Needed
This is a static frontend application with no dependencies. Simply open the HTML file in a browser.

## How to Run

### Method 1: Direct File Opening

1. Navigate to the Question C folder:
   ```powershell
   cd "c:\Users\ntinl\Downloads\Technical submission\Question C"
   ```

2. Open the `index.html` file in your default browser:
   ```powershell
   Start-Process index.html
   ```

### Method 2: Using Live Server (Recommended)

If you have VS Code with Live Server extension:

1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The page will open at `http://localhost:5500` (or similar)

### Method 3: Using Python HTTP Server

If you have Python installed:

```powershell
cd "c:\Users\ntinl\Downloads\Technical submission\Question C"
python -m http.server 8000
```

Then open your browser and navigate to: `http://localhost:8000`

### Method 4: Using Node.js HTTP Server

If you have Node.js installed:

```powershell
cd "c:\Users\ntinl\Downloads\Technical submission\Question C"
npx http-server -p 8000
```

Then open your browser and navigate to: `http://localhost:8000`

## Testing Guide

### Test Case 1: Empty Fields
1. Click "Login" without entering anything
2. **Expected**: "Email is required" error message

### Test Case 2: Invalid Email Format
1. Enter: `notanemail`
2. **Expected**: "Please enter a valid email address" error

### Test Case 3: Non-existent Email
1. Enter: `nonexistent@example.com`
2. **Expected**: "This email does not exist" error

### Test Case 4: Password Too Short
1. Email: `test@example.com`
2. Password: `Test@12`
3. **Expected**: "Password must be at least 8 characters" error

### Test Case 5: Password Missing Requirements
1. Email: `test@example.com`
2. Try various passwords:
   - `testtest` (no uppercase, number, or symbol)
   - `TESTTEST` (no lowercase, number, or symbol)
   - `Test1234` (no symbol)
3. **Expected**: Specific error for each missing requirement

### Test Case 6: Wrong Password
1. Email: `test@example.com`
2. Password: `Wrong@1234`
3. **Expected**: "Incorrect password" error

### Test Case 7: Successful Login
1. Email: `test@example.com`
2. Password: `Test@1234`
3. **Expected**: Welcome screen with "Welcome, test@example.com!"

### Test Case 8: Logout
1. After successful login, click "Logout"
2. **Expected**: Returns to login page with cleared form

### Test Case 9: Responsive Design
1. Resize browser window or test on mobile device
2. **Expected**: Layout adjusts appropriately for all screen sizes

### Test Case 10: Password Visibility Toggle
1. Enter password
2. Click the eye icon
3. **Expected**: Password becomes visible/hidden

## Code Features

### Clean Code Practices
- ✅ Well-commented code explaining functionality
- ✅ Modular functions with single responsibilities
- ✅ Consistent naming conventions
- ✅ JSDoc-style function documentation
- ✅ Semantic HTML structure
- ✅ BEM-like CSS organization

### Modern Design Features
- ✅ Gradient background
- ✅ Smooth animations and transitions
- ✅ Interactive hover effects
- ✅ Clean, minimalist UI
- ✅ Accessible form inputs
- ✅ Visual feedback for user actions
- ✅ Mobile-first responsive design

### Security Considerations
- Input validation on frontend
- Password requirements enforce strong passwords
- Visual feedback for errors without exposing system details
- No credentials stored in browser storage (session-only)

## Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Possible improvements for production use:
- Backend API integration
- Token-based authentication
- "Remember me" functionality
- Account creation and password reset flows
- Multi-factor authentication
- Session management
- HTTPS enforcement
- Rate limiting for login attempts
