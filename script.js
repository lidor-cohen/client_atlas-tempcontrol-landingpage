// Mobile menu toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
  this.innerHTML = document.querySelector(".nav-menu").classList.contains("active") 
    ? '<i class="fas fa-times"></i>' 
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll(".nav-menu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.remove("active");
    document.getElementById("mobile-menu").innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Close video popup on page load and setup contact form
document.addEventListener("DOMContentLoaded", function () {
  closeVideoPopup();
  setupContactForm();
});

// Contact form submission handler
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        fullName: contactForm.fullName.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        interest: contactForm.interest.value,
        message: contactForm.message.value,
        timestamp: new Date().toISOString(),
        source: "T-LoG 4X4 Landing Page"
      };
      
      // Show loading state
      formStatus.innerHTML = '<p class="loading">שולח את הפנייה...</p>';
      formStatus.style.display = "block";
      
      // Send data to webhook
      fetch("https://hook.eu1.make.com/7uhjs1m29khl21mkgg7fbp54nye5d6hm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          // Success
          formStatus.innerHTML = '<p class="success">תודה על פנייתך! נחזור אליך בהקדם.</p>';
          contactForm.reset();
        } else {
          // Server error
          throw new Error('Server error');
        }
      })
      .catch(error => {
        // Network or other error
        console.error("Error submitting form:", error);
        formStatus.innerHTML = '<p class="error">אירעה שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר.</p>';
      });
    });
  }
}

// Video Popup Functions
function openVideoPopup() {
  const popup = document.getElementById("videoPopup");
  const videoFrame = document.getElementById("demoVideo");
  videoFrame.src = "assets/videos/showcase_video.mp4"; // שימוש בסרטון מהתיקייה assets/videos
  popup.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeVideoPopup() {
  const popup = document.getElementById("videoPopup");
  const videoFrame = document.getElementById("demoVideo");
  videoFrame.src = "";
  popup.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close popup when clicking outside
window.onclick = function (event) {
  const popup = document.getElementById("videoPopup");
  if (event.target == popup) {
    closeVideoPopup();
  }
};
