// JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Create a JavaScript object with the form data
    const formData = {
      name: name,
      email: email,
      message: message,
    };
  
    // You can send the formData object to your server-side code
    // for processing and email sending. Implement the server-side
    // logic in your Node.js, PHP, or other backend code.
  
    // For now, let's just log the form data for demonstration purposes
    console.log("Form Data:", formData);
  
    // Optionally, you can display a confirmation message to the user
    alert("Form submitted successfully. Email sending functionality is not implemented in this example.");
  });
  function showDetails(id) {
    const details = document.getElementById(id + '-details');
    details.style.display = 'block';
}  