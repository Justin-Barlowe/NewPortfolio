// Contact form submission using EmailJS

// Initialize EmailJS
(function(){
    emailjs.init("3zPZXD5tqx9I5VpsQ"); // Initialize EmailJS with your user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Send the form data using EmailJS
    emailjs.sendForm('service_g6iomdn', 'template_u4gg8oa', this)
        .then(function() {
            console.log('SUCCESS!');
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the message. Please try again.');
        });
});