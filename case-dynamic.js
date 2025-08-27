function getCaseName() {
  const params = new URLSearchParams(window.location.search);
  return params.get('case');
}

function renderCase(caseData) {
  const container = document.getElementById('case-content');
  document.title = caseData.title + " - Case Study";
  renderUXLayout(container, caseData); 
}

function renderUXLayout(container, data) {
  container.innerHTML = `
    <article class="case-study">
      <header>
        <h2>${data.title}</h2>
        <h4>${data.subtitle}</h4>
      </header>

      <div class="case-section-grid">
        <section class="case-section">
          <h3>Role</h3>
          <p>${data.role}</p>
        </section>

        <section class="case-section">
          <h3>Overview</h3>
          <p>${data.overview}</p>
        </section>

        <section class="case-section">
          <h3>Goal</h3>
          <p>${data.goal}</p>
        </section>
      </div>

      ${data.sections.map(section => `
        <section class="case-section">
          <h3>${section.heading}</h3>
          ${section.content}
          ${section.image ? `<img src="${section.image}" alt="">` : ""}
        </section>
      `).join('')}
      ${data.prototype ? `<a class="link-to" href="${data.prototype}" target="_blank"><h3>Prototype <i class="fa-solid fa-up-right-from-square"></i></h3></a>` : ""}
      ${data.repository ? `<a class="link-to" href="${data.repository}" target="_blank"><h3>Repository <i class="fa-solid fa-up-right-from-square"></i></h3></a>` : ""}
      <footer class="case-footer">
        <p><strong>Want to work together?</strong><br>
        Contact me: <a href="mailto: arnoldomaganacernas@gmail.com">arnoldomaganacernas@gmail.com</a></p>
      </footer>
    </article>
  `;
}

// Main
const caseName = getCaseName();
if (cases[caseName]) {
  renderCase(cases[caseName]);
} else {
  document.getElementById('case-content').innerHTML = "<p>Case not found.</p>";
}

// Burger menu for mobile nav
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Show navbar on load
  const navbar = document.querySelector('.navbar');
  navbar.classList.add('visible');
});

// After rendering:
if (window.Flickity) {
  setTimeout(() => {
    const galleries = document.querySelectorAll('.js-flickity');
    galleries.forEach(gallery => {
      new Flickity(gallery, { wrapAround: true, imagesLoaded: true });
    });
  }, 100);
}