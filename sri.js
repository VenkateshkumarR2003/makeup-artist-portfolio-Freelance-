
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle =
    document.getElementById('menu-toggle') ||
    document.querySelector('.menu-toggle') ||
    document.getElementById('navToggle') ||
    document.querySelector('.nav-toggle');

  const navMenu =
    document.getElementById('nav-menu') ||
    document.getElementById('navMenu') ||
    document.querySelector('.nav-menu');

  if (!menuToggle || !navMenu) {
    console.warn('Navbar toggle or nav menu not found:', { menuToggle, navMenu });
    return;
  }

  const icon = menuToggle.querySelector('i') || menuToggle.querySelector('svg');

  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');

    if (icon && icon.classList) {
      if (icon.classList.contains('fa-bars') || icon.classList.contains('fa-xmark')) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      } else if (icon.tagName === 'SVG') {
        icon.classList.toggle('toggled');
      }
    } else {
      menuToggle.classList.toggle('toggled');
    }
  });

  
  const navLinks = navMenu.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      
      navMenu.classList.remove('active', 'open');
      menuToggle.classList.remove('active');
      if (icon && icon.classList.contains('fa-xmark')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.getElementById('nextTestimonial');
  const prevBtn = document.getElementById('prevTestimonial');
  const dotsContainer = document.getElementById('testimonialDots');

  if (!cards.length) return;

  let index = 0;
  let autoSlideInterval;

  
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showTestimonial(i) {
    cards.forEach((card, idx) => card.classList.toggle('active', idx === i));
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
  }

  function nextSlide() {
    index = (index + 1) % cards.length;
    showTestimonial(index);
  }

  function prevSlide() {
    index = (index - 1 + cards.length) % cards.length;
    showTestimonial(index);
  }

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showTestimonial(index);
      resetAutoSlide();
    });
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  showTestimonial(index);
  startAutoSlide();
});


document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.products-carousel');
  if (!carousel) return;

  carousel.addEventListener('mouseenter', () => {
    carousel.style.animationPlayState = 'paused';
  });
  carousel.addEventListener('mouseleave', () => {
    carousel.style.animationPlayState = 'running';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (form) {
    form.addEventListener('submit', () => {
      alert("Thank you for your inquiry! 💄 I’ll get back to you shortly.");
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, '');
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '').slice(0, 10);
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});


window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.getElementById('nextTestimonial');
  const prevBtn = document.getElementById('prevTestimonial');
  const dotsContainer = document.getElementById('testimonialDots');

  if (!cards.length || !dotsContainer) return;

  let index = 0;
  dotsContainer.innerHTML = '';

  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function showTestimonial(i) {
    cards.forEach((card, idx) => card.classList.toggle('active', idx === i));
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
  }

  function nextSlide() {
    index = (index + 1) % cards.length;
    showTestimonial(index);
  }

  function prevSlide() {
    index = (index - 1 + cards.length) % cards.length;
    showTestimonial(index);
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);
  dots.forEach((dot, i) => dot.addEventListener('click', () => showTestimonial(i)));

  setInterval(nextSlide, 5000);
});


document.addEventListener("DOMContentLoaded", () => {
  const tracks = document.querySelectorAll(".marquee-row .marquee-track");

  tracks.forEach(track => {
    track.innerHTML = track.innerHTML + track.innerHTML;

    const imgs = track.querySelectorAll('img');
    imgs.forEach(img => {
      img.style.flexShrink = '0';
    });
  });
});
