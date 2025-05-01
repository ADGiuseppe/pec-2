// Main JavaScript entry point for your project

// Import Bootstrap's JavaScript for interactive components (modals, dropdowns, etc.)
import * as bootstrap from 'bootstrap';

window.copyQuote = function(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    const modal = new bootstrap.Modal(document.getElementById('quoteCopiedModal'));
    modal.show();
    setTimeout(() => {
      modal.hide();
    }, 1200);
  });
};

      // Show toast on successful form submission
      document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const toastEl = document.getElementById('signupToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
        // Optionally reset the form
        e.target.reset();
      });