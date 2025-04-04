// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

// Tab functionality
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Remove 'active' class from all tabs and contents
    tabLinks.forEach((l) => l.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    // Add 'active' class to the clicked tab
    link.classList.add('active');
    // Show the matching content
    const tabId = link.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});