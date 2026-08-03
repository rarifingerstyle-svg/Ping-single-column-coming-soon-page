     document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('subscribe-form');
      const emailInput = document.getElementById('email');
      const errorMessage = document.getElementById('email-error');

      // Helper function to validate email format
      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      // Set Error State
      const showError = (message) => {
        emailInput.classList.add('border-red-400');
        emailInput.classList.remove('border-blue-200');
        errorMessage.textContent = message;
        errorMessage.classList.remove('hidden');
        emailInput.setAttribute('aria-invalid', 'true');
      };

      // Clear Error State
      const clearError = () => {
        emailInput.classList.remove('border-red-400');
        emailInput.classList.add('border-blue-200');
        errorMessage.classList.add('hidden');
        errorMessage.textContent = '';
        emailInput.removeAttribute('aria-invalid');
      };

      // Submit Event Listener
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
          showError('Whoops! It looks like you forgot to add your email');
        } else if (!isValidEmail(emailValue)) {
          showError('Please provide a valid email address');
        } else {
          clearError();
          alert('Success! You have subscribed to Ping updates.');
          form.reset();
        }
      });

      // Clear error dynamically as user edits input
      emailInput.addEventListener('input', () => {
        if (emailInput.getAttribute('aria-invalid') === 'true') {
          clearError();
        }
      });
    });
  