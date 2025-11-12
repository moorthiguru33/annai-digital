// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Smooth Scroll for All Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Gallery Filter
// ===================================
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
let currentFilter = 'all';

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        currentFilter = btn.getAttribute('data-filter');
        filterGallery(currentFilter);
    });
});

function filterGallery(filter) {
    const galleryViewMoreBtn = document.getElementById('galleryViewMore');

    galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        const isHidden = item.classList.contains('gallery-hidden');

        if (filter === 'all') {
            // Show all non-hidden items
            if (!isHidden) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            }
        } else {
            // Show only matching category non-hidden items
            if (category === filter && !isHidden) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else if (category !== filter) {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        }
    });

    // Reset View More button if filter changes
    const hiddenItems = document.querySelectorAll('.gallery-item.gallery-hidden');
    let hasHiddenInFilter = false;

    hiddenItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
            hasHiddenInFilter = true;
        }
    });

    if (hasHiddenInFilter) {
        galleryViewMoreBtn.querySelector('span').textContent = 'View More Projects';
        galleryViewMoreBtn.querySelector('i').style.transform = 'rotate(0deg)';
        galleryViewMoreBtn.classList.remove('active');
    }
}

// ===================================
// Gallery View More Functionality
// ===================================
const galleryViewMoreBtn = document.getElementById('galleryViewMore');
let galleryExpanded = false;

galleryViewMoreBtn.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.gallery-item.gallery-hidden');

    if (!galleryExpanded) {
        // Show hidden items
        hiddenItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (currentFilter === 'all' || category === currentFilter) {
                item.classList.remove('gallery-hidden');
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            }
        });

        galleryViewMoreBtn.querySelector('span').textContent = 'View Less';
        galleryViewMoreBtn.querySelector('i').style.transform = 'rotate(180deg)';
        galleryViewMoreBtn.classList.add('active');
        galleryExpanded = true;
    } else {
        // Hide items again
        hiddenItems.forEach(item => {
            item.classList.add('gallery-hidden');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        });

        galleryViewMoreBtn.querySelector('span').textContent = 'View More Projects';
        galleryViewMoreBtn.querySelector('i').style.transform = 'rotate(0deg)';
        galleryViewMoreBtn.classList.remove('active');
        galleryExpanded = false;

        // Scroll to gallery section
        const gallerySection = document.getElementById('gallery');
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.scrollTo({
            top: gallerySection.offsetTop - headerHeight - 20,
            behavior: 'smooth'
        });
    }
});

// ===================================
// Clients View More Functionality
// ===================================
const clientsViewMoreBtn = document.getElementById('clientsViewMore');
let clientsExpanded = false;

clientsViewMoreBtn.addEventListener('click', () => {
    const hiddenClients = document.querySelectorAll('.client-logo.client-hidden');

    if (!clientsExpanded) {
        // Show hidden clients
        hiddenClients.forEach((client, index) => {
            setTimeout(() => {
                client.classList.remove('client-hidden');
                client.style.display = 'flex';
                setTimeout(() => {
                    client.style.opacity = '1';
                    client.style.transform = 'scale(1)';
                }, 10);
            }, index * 50); // Stagger animation
        });

        clientsViewMoreBtn.querySelector('span').textContent = 'View Less';
        clientsViewMoreBtn.querySelector('i').style.transform = 'rotate(180deg)';
        clientsViewMoreBtn.classList.add('active');
        clientsExpanded = true;
    } else {
        // Hide clients again
        hiddenClients.forEach(client => {
            client.style.opacity = '0';
            client.style.transform = 'scale(0.8)';
            setTimeout(() => {
                client.style.display = 'none';
                client.classList.add('client-hidden');
            }, 300);
        });

        clientsViewMoreBtn.querySelector('span').textContent = 'View More Clients';
        clientsViewMoreBtn.querySelector('i').style.transform = 'rotate(0deg)';
        clientsViewMoreBtn.classList.remove('active');
        clientsExpanded = false;

        // Scroll to clients section
        const clientsSection = document.getElementById('clients');
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.scrollTo({
            top: clientsSection.offsetTop - headerHeight - 20,
            behavior: 'smooth'
        });
    }
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // For Netlify Forms, the form will submit automatically
    // But we can show a custom success message
    console.log('Form submitted:', data);

    // Hide form and show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');

    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.classList.remove('show');
    }, 5000);
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Animate Elements on Scroll
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, gallery items, and info cards
document.querySelectorAll('.service-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// Header Background on Scroll
// ===================================
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// ===================================
// Preload Images for Gallery
// ===================================
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });
});

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} Annai Digital Signage. All Rights Reserved.`;
}

// ===================================
// Service Card Hover Effect
// ===================================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '4px solid var(--primary-color)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// ===================================
// Gallery Item Click - Lightbox Effect
// ===================================
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const overlay = this.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h4').textContent;
        const subtitle = overlay.querySelector('p').textContent;

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
                <div class="lightbox-info">
                    <h4>${title}</h4>
                    <p>${subtitle}</p>
                </div>
            </div>
        `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);

        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => {
            closeLightbox(lightbox);
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox(lightbox);
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeLightbox(lightbox);
                document.removeEventListener('keydown', escHandler);
            }
        });
    });
});

function closeLightbox(lightbox) {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        if (document.body.contains(lightbox)) {
            document.body.removeChild(lightbox);
        }
        document.body.style.overflow = 'auto';
    }, 300);
}

// Add lightbox styles dynamically
const style = document.createElement('style');
style.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
    }

    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .lightbox-content img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
    }

    .lightbox-info {
        margin-top: 20px;
        text-align: center;
        color: white;
    }

    .lightbox-info h4 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #FFD23F;
    }

    .lightbox-info p {
        font-size: 1rem;
        opacity: 0.9;
    }

    .lightbox-close {
        position: absolute;
        top: -50px;
        right: 0;
        font-size: 45px;
        color: white;
        cursor: pointer;
        transition: color 0.3s ease;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .lightbox-close:hover {
        color: #FF6B35;
    }

    @media (max-width: 768px) {
        .lightbox-content {
            max-width: 95%;
        }

        .lightbox-content img {
            max-height: 70vh;
        }

        .lightbox-close {
            top: -40px;
            font-size: 35px;
            width: 35px;
            height: 35px;
        }

        .lightbox-info h4 {
            font-size: 1.2rem;
        }

        .lightbox-info p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .lightbox {
            padding: 10px;
        }

        .lightbox-content img {
            max-height: 60vh;
        }

        .lightbox-close {
            top: -35px;
            right: -5px;
            font-size: 30px;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Touch Support for Mobile Devices
// ===================================
if ('ontouchstart' in window) {
    // Add touch-friendly interactions
    document.querySelectorAll('.service-card, .gallery-item, .client-logo').forEach(el => {
        el.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        el.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===================================
// Performance Optimization
// ===================================
// Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('✅ Annai Digital Signage website loaded successfully!');
console.log('📱 Mobile-optimized | 🖼️ Gallery with View More | 👥 Clients with View More');