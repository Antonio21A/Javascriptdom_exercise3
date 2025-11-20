

const validUsername = "admin";
const validPassword = "password123";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form");
  const modal = document.querySelector(".modal");

  if (modal) {
    modal.style.display = "none";
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); 

      const username = document.querySelector("#uname").value.trim();
      const password = document.querySelector("#pwd").value.trim();

      if (username === validUsername && password === validPassword) {
        window.location.href = "index.html"; 
      } else {
        showModal(); 
      }
    });
  }
});

function showModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "block";
  }
}

function hideModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.style.display = "none";
  }
}

// ✅ Close modal when clicking outside of it
window.addEventListener("click", (e) => {
  const modal = document.querySelector(".modal");
  if (modal && e.target === modal) {
    hideModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideModal();
  }
}); 


let navOpen = false;

function toggleNav() {
  const sidebar = document.querySelector(".nav-sidebar");
  const toggleBtn = document.querySelector(".btn-toggle-nav");
  const links = document.querySelectorAll(".nav-sidebar ul li a, .nav-sidebar ul li span");

  if (!sidebar || !toggleBtn) return;

  navOpen = !navOpen;

  sidebar.style.width = navOpen ? "272px" : "50px";

  toggleBtn.style.transform = navOpen ? "rotate(90deg)" : "rotate(0deg)";

  links.forEach(link => {
    link.style.opacity = navOpen ? "1" : "0";
    link.style.visibility = navOpen ? "visible" : "hidden";
  });
}