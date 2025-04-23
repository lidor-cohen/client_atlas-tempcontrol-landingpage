// Mobile menu toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});

// Close video popup on page load
document.addEventListener("DOMContentLoaded", function () {
  closeVideoPopup();
});

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
