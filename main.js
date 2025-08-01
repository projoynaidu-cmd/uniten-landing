
  
  
  // Dropdown toggle function for mobile
  function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = document.getElementById(dropdownId.replace('dropdown', 'arrow'));
    
    dropdown.classList.toggle('hidden');
    arrow.classList.toggle('rotate-180');
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
      mobileMenu.classList.add('translate-x-full');
      document.body.style.overflow = 'auto';
    }
  });




  // Grade level tab functionality
  const gradeTabs = document.querySelectorAll('.grade-tab');
  
  gradeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      gradeTabs.forEach(t => {
        t.classList.remove('active', 'bg-blue-600', 'text-white');
        t.classList.add('bg-gray-200', 'text-gray-700');
      });
      
      // Add active class to clicked tab
      tab.classList.add('active', 'bg-blue-600', 'text-white');
      tab.classList.remove('bg-gray-200', 'text-gray-700');
      
      // Filter content based on selected grade
      const selectedGrade = tab.dataset.grade;
      console.log(`Showing content for: ${selectedGrade}`);
      // In a real implementation, you would filter the pathway cards here
    });
  });

  // Pathway card interaction
  document.querySelectorAll('.pathway-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') return;
      const subject = e.target.closest('.pathway-card').querySelector('h3').textContent;
      console.log(`Exploring ${subject} pathway`);
      // Would typically open a modal or navigate to detailed view
    });
  });


// GSAP Animations
gsap.from("header", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
});

gsap.from("h1", {
  duration: 1.2,
  x: -50,
  opacity: 0,
  delay: 0.5,
  ease: "power3.out",
});

gsap.from("p", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.8,
  ease: "power3.out",
});

gsap.from("a.inline-block", {
  duration: 1,
  scale: 0.8,
  opacity: 0,
  delay: 1.1,
  ease: "back.out(1.7)",
});

gsap.from("img", {
  duration: 1.2,
  x: 100,
  opacity: 0,
  delay: 0.8,
  ease: "power3.out",
});
gsap.from("section", {
  scrollTrigger: {
    trigger: "section",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

