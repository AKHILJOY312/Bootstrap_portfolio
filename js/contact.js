window.onload = function() {
    // Add form submit event listener
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Send form data using EmailJS
        emailjs.sendForm('service_9pwgakr', 'template_8iihe5l', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('Message sent successfully!');
                this.reset(); // Clear the form after successful submission
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
}