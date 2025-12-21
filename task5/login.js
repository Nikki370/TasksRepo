document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const togglePw = document.getElementById('togglePw');
  const emailInput = document.getElementById('email');
  const pwInput = document.getElementById('password');


  togglePw && togglePw.addEventListener('click', () => {
    if (pwInput.type === 'password') {
      pwInput.type = 'text';
      togglePw.textContent = 'Hide';
    } else {
      pwInput.type = 'password';
      togglePw.textContent = 'Show';
    }
  });


  loginForm && loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    let hasError = false;
    const email = emailInput.value.trim();
    const pw = pwInput.value.trim();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      showError(emailInput, 'Please enter a valid email');
      hasError = true;
    }

    if (pw.length < 6) {
      showError(pwInput, 'Password must be at least 6 characters');
      hasError = true;
    }

    if (hasError) return;


    try {
      localStorage.setItem('apex_user', JSON.stringify({ email, token: 'demo-token' }));
    } catch (err) {
      console.warn('localStorage not available', err);
    }

  
    const btn = loginForm.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Signing in...';
    btn.disabled = true;
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  });

  function showError(input, message) {
    const el = input.closest('.field')?.querySelector('.error');
    if (el) el.textContent = message;
    input.classList.add('invalid');
  }

  function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('.invalid').forEach(i => i.classList.remove('invalid'));
  }
});
