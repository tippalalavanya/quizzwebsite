// Function to handle login form submission
function flip() {

    document.querySelector('.flip-card-inner').style.transform = "rotateY(180deg)";

}

function flipAgain() {

    document.querySelector('.flip-card-inner').style.transform = "rotateY(0deg)";

}
// script.js
const handleLogin = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Redirect to QuizPage
        redirectToQuizPage();
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  // Function to handle signup form submission
  const handleSignup = async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
  
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (data.message === 'User registered successfully') {
        // Redirect to QuizPage after signup
        redirectToQuizPage();
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
  
  // Redirect to QuizPage function
  const redirectToQuizPage = () => {
    window.location.href = '/quiz.html'; // Adjust the URL according to your file structure
  };
  
  // Event listeners for form submissions
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  document.getElementById('signup-form').addEventListener('submit', handleSignup);
  
  // Toggle password visibility for login
  const togglePasswordVisibility = (eyeIcon, passwordField) => {
    eyeIcon.addEventListener('click', () => {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.className = 'fa fa-eye';
        eyeIcon.style.color = 'cyan';
      } else {
        passwordField.type = 'password';
        eyeIcon.className = 'fa fa-eye-slash';
        eyeIcon.style.color = 'white';
      }
    });
  };
  
  // Toggle password visibility for login
  togglePasswordVisibility(document.getElementById('eye-login'), document.getElementById('password-login'));
  
  // Toggle password visibility for signup
  togglePasswordVisibility(document.getElementById('eye-signup'), document.getElementById('password-signup'));
  