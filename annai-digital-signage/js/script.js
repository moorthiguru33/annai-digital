document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRELOADER & SETUP ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }, 1500);
    }

    // --- 2. MOBILE MENU & NAVIGATION ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        // Toggle Menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // --- 3. TYPING TEXT EFFECT ---
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const words = ["NEON SIGNS", "LED DISPLAYS", "3D LETTERS", "BRASS BOARDS"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Wait before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Wait before typing next
            } else {
                setTimeout(type, isDeleting ? 50 : 150);
            }
        };
        type();
    }

    // --- 4. SCROLL ANIMATIONS (Intersection Observer) ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger stats counter only when visible
                if (entry.target.classList.contains('hero-stats')) {
                    startCounters();
                }
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .hero-stats, .section-title').forEach(el => observer.observe(el));

    // --- 5. GALLERY FILTERING ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.style.display = 'block';
                        // Small delay for fade effect
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.9)';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // --- 6. "VIEW MORE" FUNCTIONALITY ---
    
    // Gallery View More
    const loadMoreGalleryBtn = document.getElementById('loadMoreGallery');
    if (loadMoreGalleryBtn) {
        loadMoreGalleryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const hiddenItems = document.querySelectorAll('.gallery-item.gallery-hidden');
            
            hiddenItems.forEach(item => {
                item.classList.remove('gallery-hidden');
                item.classList.add('fade-in-up');
                item.classList.add('visible');
            });
            
            // Hide button after showing all
            this.style.display = 'none';
        });
    }

    // Clients View More
    const loadMoreClientsBtn = document.getElementById('loadMoreClients');
    if (loadMoreClientsBtn) {
        loadMoreClientsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const hiddenClients = document.querySelectorAll('.client-logo.client-hidden');
            
            hiddenClients.forEach(client => {
                client.classList.remove('client-hidden');
                client.classList.add('fade-in-up');
                client.classList.add('visible');
            });
            
            this.style.display = 'none';
        });
    }
});

// --- GLOBAL FUNCTIONS (Available to HTML Buttons) ---

// 7. STATS COUNTER ANIMATION
function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
}

// 8. SEND GENERAL CONTACT FORM TO WHATSAPP
window.sendContactToWhatsapp = function() {
    const name = document.getElementById('conName').value;
    const phone = document.getElementById('conPhone').value;
    const msg = document.getElementById('conMsg').value;

    if (!name || !phone) {
        alert("Please enter your name and mobile number.");
        return;
    }

    // Formatting the message
    const whatsappMsg = `*New Website Inquiry* %0A%0A*Name:* ${name} %0A*Phone:* ${phone} %0A*Message:* ${msg}`;
    
    // Annai Digital Number
    const phoneNumber = "919884885789";
    
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;
    window.open(url, '_blank');
}

// 9. QUOTE CALCULATOR & WHATSAPP SENDER
window.calculatePrice = function() {
    // Get values safely
    const hInput = document.getElementById('height');
    const wInput = document.getElementById('width');
    const matInput = document.getElementById('materialType');
    
    if(!hInput || !wInput) return;

    const h = parseFloat(hInput.value) || 0;
    const w = parseFloat(wInput.value) || 0;
    const pricePerSqFt = parseFloat(matInput ? matInput.value : 0);

    const totalArea = h * w;
    const totalCost = totalArea * pricePerSqFt;

    // Update UI
    const finalPriceEl = document.getElementById('finalPrice');
    if(finalPriceEl) {
        finalPriceEl.innerText = "₹ " + totalCost.toLocaleString('en-IN');
    }
}

window.sendQuoteToWhatsapp = function() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    
    const h = document.getElementById('height').value;
    const w = document.getElementById('width').value;
    
    const matSelect = document.getElementById('materialType');
    const materialName = matSelect.options[matSelect.selectedIndex].text;
    
    const estPrice = document.getElementById('finalPrice').innerText;

    if (!name || !phone) {
        alert("Please enter your Name and Phone Number to receive the quote.");
        return;
    }

    const whatsappMsg = `*Quote Request* %0A%0A*Name:* ${name} %0A*Phone:* ${phone} %0A%0A*Requirement Details:* %0A*Type:* ${materialName} %0A*Size:* ${h} ft x ${w} ft %0A*Estimated Cost:* ${estPrice} %0A%0A_Please confirm availability._`;
    
    const phoneNumber = "919884885789";
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;
    window.open(url, '_blank');
}
