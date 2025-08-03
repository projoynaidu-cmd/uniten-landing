// === MOBILE MENU TOGGLE ===
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
});

// Close menu when clicking on any mobile menu link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
  });
});

// === DROPDOWN TOGGLE (Mobile) ===
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const arrow = document.getElementById('courses-arrow');
  dropdown.classList.toggle('hidden');
  arrow.classList.toggle('rotate-180');
}

// === GRADE TAB FUNCTIONALITY ===
const gradeTabs = document.querySelectorAll('.grade-tab');
gradeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    gradeTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // Load grade-specific content here
  });
});

// === STEP CARDS ANIMATION ===
document.querySelectorAll('.step-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
  card.classList.add('opacity-0', 'translate-y-5');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-5');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(card);
});

// === CTA BUTTON INTERACTION ===
document.querySelector('.cta-button').addEventListener('click', () => {
  console.log('Free trial started');
  // Trigger modal or redirect here
});

// === 3D TESTIMONIAL STACK ===
const stack = document.querySelector('.testimonial-stack');
const cards = Array.from(document.querySelectorAll('.testimonial-card'));
const dots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;

function updateStack() {
  cards.forEach((card, index) => {
    const z = -Math.abs(index - currentIndex) * 40;
    const y = Math.abs(index - currentIndex) * 20;
    const opacity = 1 - Math.abs(index - currentIndex) * 0.3;
    const scale = 1 - Math.abs(index - currentIndex) * 0.05;

    card.style.transform = `translateZ(${z}px) translateY(${y}px) scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = 3 - Math.abs(index - currentIndex);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('bg-indigo-600', index === currentIndex);
    dot.classList.toggle('bg-gray-300', index !== currentIndex);
  });
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateStack();
  });
});

// Mobile swipe navigation
let touchStartX = 0;
stack.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

stack.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;

  if (diff > 50 && currentIndex < cards.length - 1) {
    currentIndex++;
    updateStack();
  } else if (diff < -50 && currentIndex > 0) {
    currentIndex--;
    updateStack();
  }
}, { passive: true });

// Keyboard nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
    currentIndex++;
    updateStack();
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    currentIndex--;
    updateStack();
  }
});

// Reaction button interaction
const reactionButtons = document.querySelectorAll('.reaction-btn');
reactionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const emoji = btn.dataset.emoji;
    btn.innerHTML = `${emoji} ${parseInt(btn.textContent.match(/\d+/)[0]) + 1}`;
    btn.classList.add('animate-bounce');
    setTimeout(() => btn.classList.remove('animate-bounce'), 1000);
  });
});

updateStack(); // Initialize

// === TEACHER CARDS ===
document.querySelectorAll('.teacher-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
    const bio = card.querySelector('.teacher-bio');
    bio.style.opacity = bio.style.opacity === '1' ? '0' : '1';
  });
});

// Teacher card animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.teacher-card').forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
  observer.observe(card);
});

// === PRICING TOGGLE ===
const pricingToggles = document.querySelectorAll('.pricing-toggle');
const pricingCards = document.querySelectorAll('.pricing-card');

pricingToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    pricingToggles.forEach(t => t.classList.remove('active', 'text-white', 'bg-blue-600'));
    toggle.classList.add('active', 'text-white', 'bg-[#ff5a73]');

    const plan = toggle.dataset.plan;
    pricingCards.forEach(card => {
      card.classList.add('hidden');
      if (card.classList.contains(plan)) {
        card.classList.remove('hidden');
      }
    });
  });
});

// Animate pricing cards on scroll
const pricingObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pricing-card').forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
  pricingObserver.observe(card);
});

// === FOOTER ACCORDION (Mobile) ===
document.querySelectorAll('.footer-col-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling.nextElementSibling;
    const icon = button.querySelector('svg');

    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');

    if (!content.classList.contains('hidden')) {
      document.querySelectorAll('.footer-col-content').forEach(item => {
        if (item !== content) item.classList.add('hidden');
      });
      document.querySelectorAll('.footer-col-toggle svg').forEach(item => {
        if (item !== icon) item.classList.remove('rotate-180');
      });
    }
  });
});

// Auto open first column on mobile
if (window.innerWidth < 768) {
  const firstContent = document.querySelector('.footer-col-content');
  firstContent.classList.remove('hidden');
  document.querySelector('.footer-col-toggle svg').classList.add('rotate-180');
}

// === TEAM CARD HOVER ===
document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.querySelector('p.text-gray-500').classList.remove('hidden');
  });
  card.addEventListener('mouseleave', function() {
    this.querySelector('p.text-gray-500').classList.add('hidden');
  });
});

// === GSAP ANIMATIONS ===
gsap.registerPlugin(ScrollTrigger);

// Animate pathway cards
gsap.utils.toArray('.pathway-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out"
  });
});

// Animate hero section on load
gsap.from(".animate-fadeIn", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});
