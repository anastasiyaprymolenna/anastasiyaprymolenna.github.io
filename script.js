document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    console.log("Submitted:", { name, email, message });
  
    alert("Thanks for contacting Obscurion! We'll get back to you (maybe).");
  
    this.reset();
  });
  