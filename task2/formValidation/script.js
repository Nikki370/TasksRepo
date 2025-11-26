const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', (e) => {
        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const passEl = document.getElementById('password');

        const name = (nameEl?.value || '').trim();
        const email = (emailEl?.value || '').trim();
        const pass = (passEl?.value || '').trim();

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === '') {
            e.preventDefault();
            alert('Please enter your name.');
            nameEl?.focus();
            return;
        }

        if (!pattern.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            emailEl?.focus();
            return;
        }

        if (pass === '') {
            e.preventDefault();
            alert('Please enter your password.');
            passEl?.focus();
            return;
        }

    });
} else {
    console.warn('No <form> element found on the page.');
}