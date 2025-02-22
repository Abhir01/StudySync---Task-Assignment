document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact');
    const emailInput = document.querySelector('.news-email');
    const sendButton = document.querySelector('.news-send-button');
    
    emailInput.addEventListener('input', function () {
        if (!validateEmail(emailInput.value.trim())) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    sendButton.addEventListener('click', function (event) {
        if (!validateEmail(emailInput.value.trim())) {
            event.preventDefault();
            emailInput.reportValidity();
        } else {
            form.submit();
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
