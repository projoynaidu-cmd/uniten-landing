
      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
      });
      
      // Close mobile menu when clicking on a link
      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('translate-x-full');
        });
      });
      
      // Toggle dropdown for mobile
      function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        const arrow = document.getElementById('courses-arrow');
        dropdown.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
      }
      
      // Grade tabs functionality
      const gradeTabs = document.querySelectorAll('.grade-tab');
      gradeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          gradeTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          // Here you would typically load content for the selected grade
        });
      });

// Animation for step cards
  document.querySelectorAll('.step-card').forEach((card, index) => {
    // Add staggered animation
    card.style.transitionDelay = `${index * 100}ms`;
    card.classList.add('opacity-0', 'translate-y-5');
    
    // Intersection Observer to trigger animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(card);
  });

  // CTA button interaction
  document.querySelector('.cta-button').addEventListener('click', () => {
    console.log('Free trial started');
    // In a real implementation, this would open a signup modal or page
  });

 // 3D Stack Animation
  const stack = document.querySelector('.testimonial-stack');
  const cards = Array.from(document.querySelectorAll('.testimonial-card'));
  const dots = document.querySelectorAll('.nav-dot');
  let currentIndex = 0;

  // Animate cards in 3D space
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

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('bg-indigo-600', index === currentIndex);
      dot.classList.toggle('bg-gray-300', index !== currentIndex);
    });
  }

  // Navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index);
      updateStack();
    });
  });

  // Swipe handling for mobile
  let touchStartX = 0;
  stack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});

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
  }, {passive: true});

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
      currentIndex++;
      updateStack();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      currentIndex--;
      updateStack();
    }
  });

  // Reaction buttons
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const emoji = btn.dataset.emoji;
      btn.innerHTML = `${emoji} ${parseInt(btn.textContent.match(/\d+/)[0]) + 1}`;
      btn.classList.add('animate-bounce');
      setTimeout(() => btn.classList.remove('animate-bounce'), 1000);
    });
  });

  // Initialize
  updateStack();





// Teacher card interaction
  document.querySelectorAll('.teacher-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Ignore clicks on links/buttons
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
      
      // Toggle bio visibility
      const bio = card.querySelector('.teacher-bio');
      bio.style.opacity = bio.style.opacity === '1' ? '0' : '1';
    });
  });

  // Animation on scroll
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


  // pricing js 


   // Pricing toggle functionality
  const pricingToggles = document.querySelectorAll('.pricing-toggle');
  const pricingCards = document.querySelectorAll('.pricing-card');

  pricingToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      // Update active toggle
      pricingToggles.forEach(t => t.classList.remove('active', 'text-white', 'bg-blue-600'));
       toggle.classList.add('active', 'text-white', 'bg-[#ff5a73]');
      
      // Show corresponding pricing card
      const plan = toggle.dataset.plan;
      pricingCards.forEach(card => {
        card.classList.add('hidden');
        if (card.classList.contains(plan)) {
          card.classList.remove('hidden');
        }
      });
    });
  });

  // Animation on scroll
  const observers = new IntersectionObserver((entries) => {
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
    observers.observe(card);
  });



// footer js

// Mobile accordion functionality
  document.querySelectorAll('.footer-col-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling.nextElementSibling;
      const icon = button.querySelector('svg');
      
      // Toggle content visibility
      content.classList.toggle('hidden');
      
      // Rotate icon
      icon.classList.toggle('rotate-180');
      
      // If opening, close other accordions for better mobile UX
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

  // Initialize with first column open on mobile
  if (window.innerWidth < 768) {
    const firstContent = document.querySelector('.footer-col-content');
    firstContent.classList.remove('hidden');
    document.querySelector('.footer-col-toggle svg').classList.add('rotate-180');
  }



      // GSAP animations
      gsap.registerPlugin(ScrollTrigger);
      
      // Animate pathway cards on scroll
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
      
      // Animate hero section elements
      gsap.from(".animate-fadeIn", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
