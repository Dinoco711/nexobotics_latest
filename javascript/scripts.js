// Header scroll behavior
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Initialize particles.js with subtle configuration to match the image
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 3000
        }
      },
      "color": {
        "value": ["#00BFFF", "#ffffff"]
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0.05,
          "sync": false
        }
      },
      "size": {
        "value": 1.2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 250,
        "color": "#00BFFF",
        "opacity": 0.04,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 0.1
          }
        }
      }
    },
    "retina_detect": true
  }
);

// Animation for the circle-overlay
document.addEventListener('DOMContentLoaded', () => {
    const circleOverlay = document.querySelector('.circle-overlay');
    if (circleOverlay) {
        setTimeout(() => {
            circleOverlay.style.opacity = '1';
        }, 300);
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced staggered card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add a small delay for each card to create a staggered effect
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.value-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(card);
});

// Animated section headers
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('section h2').forEach(heading => {
    headerObserver.observe(heading);
});

// Button hover effect
document.querySelectorAll('.cta-button, .get-started-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const icon = button.querySelector('i');
        if (icon) {
            icon.style.transform = 'translateX(5px)';
        }
    });
    
    button.addEventListener('mouseleave', () => {
        const icon = button.querySelector('i');
        if (icon) {
            icon.style.transform = 'translateX(0)';
        }
    });
});

// Animate the circular arc on load
document.addEventListener('DOMContentLoaded', () => {
    const arc = document.querySelector('.circular-arc');
    const arcInner = document.querySelector('.circular-arc-inner');
    const glow = document.querySelector('.glow-effect');
    
    if (arc && arcInner && glow) {
        // Add a slight delay for the entrance animation
        setTimeout(() => {
            arc.style.opacity = '1';
            arc.style.transform = 'translateX(-50%) scale(1)';
            
            arcInner.style.opacity = '1';
            arcInner.style.transform = 'translateX(-50%) scale(1)';
            
            glow.style.opacity = '1';
            glow.style.transform = 'translateX(-50%) scale(1)';
        }, 300);
    }
});

// Add CSS styles for the animation
const style = document.createElement('style');
style.textContent = `
    .circular-arc, .circular-arc-inner, .glow-effect {
        opacity: 0;
        transform: translateX(-50%) scale(0.95);
        transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
`;
document.head.appendChild(style);
