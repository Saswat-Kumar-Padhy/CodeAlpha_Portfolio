// Example script to handle form submission (without back-end integration)
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the form from submitting the default way

  const name = form.querySelector("[name='name']").value;
  const email = form.querySelector("[name='email']").value;
  const message = form.querySelector("[name='message']").value;

  // Log the form data (for now, you could process or send it to a server)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Display an alert or show a success message
  alert("Thank you for contacting me! I'll get back to you soon.");

  // Optionally, reset the form after submission
  form.reset();
});
