document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Admin data
    const admins = [
        {
            nickname: "piwoszz",
            role: "Właściciel",
            roleClass: "owner",
            skinUrl: "https://mc-heads.net/avatar/piwoszz/100"
        },
        {
            nickname: "slonafrytka",
            role: "Właściciel",
            roleClass: "owner",
            skinUrl: "https://mc-heads.net/avatar/slonafrytka/100"
        },
        {
            nickname: "DevR4yq",
            role: "Technik",
            roleClass: "admin",
            skinUrl: "https://mc-heads.net/avatar/DevR4yq/100"
        },
    ];

    // Populate admin cards
    const adminContainer = document.getElementById('admin-container');

    admins.forEach(admin => {
        const adminCard = document.createElement('div');
        adminCard.className = 'admin-card';

        adminCard.innerHTML = `
      <div class="admin-skin">
        <img src="${admin.skinUrl}" alt="${admin.nickname} skin" loading="lazy">
      </div>
      <div class="admin-info">
        <h3>${admin.nickname}</h3>
        <span class="role ${admin.roleClass}">${admin.role}</span>
      </div>
    `;

        adminContainer.appendChild(adminCard);
    });

    // Add animation on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
    section {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
    document.head.appendChild(style);

    // Initial check and add scroll listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});