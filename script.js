// Projects Lists
const projects = [
  {
    title: 'Growmate',
    image: './assets/growmate/image.project.png',
    caseFile: './case.html?case=growmate'
  },
  {
    title: 'DocGo',
    image: './assets/DocGo/project-image.png',
    caseFile: './case.html?case=docgo'
  },
  {
    title: 'FoodPoint',
    image: './assets/foodpoint/foodpoint-mockup2.png',
    caseFile: './case.html?case=foodpoint'
  },
  {
    title: 'GastroLab',
    image: './assets/gastrolab/image-projects.png',
    caseFile: './case.html?case=gastrolab'
  }
];

// dom selector
const grid = document.querySelector('.projects-grid');

// Dynamic rendering of project cards
projects.forEach(project => {
  const card = document.createElement('div');
  card.classList.add('project-card', 'cinematic-section', 'fade-up');
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <h3>${project.title}</h3>
  `;
  
  // Navigate to project page on click
  card.addEventListener('click', () => {
    window.location.href = project.caseFile;
  });
  
  grid.appendChild(card);
  applyTiltEffect(card);
});

// Tilt effect on cards
function applyTiltEffect(card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${(x - centerX) / 10}px ${(y - centerY) / 10}px 30px rgba(0, 0, 0, 0.2)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
  });
}

// Loading animation
window.addEventListener('load', () => {
  setTimeout(() => {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.main-content');
    navbar.classList.add('visible');
    setTimeout(() => content.classList.add('visible'), 300);
  }, 800);
});

// Burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll animation
const elements = document.querySelectorAll('.cinematic-section');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

elements.forEach(el => observer.observe(el));

