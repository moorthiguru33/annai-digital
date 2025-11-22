document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }, 1500);
    }

    // 2. Typing Effect
    const typingElement = document.getElementById('typing-text');
    if(typingElement) {
        const words = ["NEON SIGNS", "LED BOARDS", "VISITING CARDS", "BILL BOOKS", "STANDIES"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 150);
            }
        }
        type();
    }

    // 3. Mobile Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if(hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Initial calc on page load if on quote page
    if(document.getElementById('finalPrice')) {
        calculatePrice();
    }
});

/* --- PRICE CALCULATOR & WHATSAPP LOGIC --- */

function updateOptions() {
    const category = document.getElementById('serviceCategory').value;
    const signageOpts = document.getElementById('signageOptions');
    const printingOpts = document.getElementById('printingOptions');
    const dims = document.getElementById('dims');
    const qtyBox = document.getElementById('qtyBox');

    if (category === 'signage') {
        signageOpts.classList.remove('hidden');
        printingOpts.classList.add('hidden');
        dims.classList.remove('hidden');
        qtyBox.classList.add('hidden');
    } else {
        signageOpts.classList.add('hidden');
        printingOpts.classList.remove('hidden');
        dims.classList.add('hidden');
        qtyBox.classList.remove('hidden');
    }
    calculatePrice();
}

function calculatePrice() {
    const category = document.getElementById('serviceCategory').value;
    let cost = 0;

    if (category === 'signage') {
        const rate = parseFloat(document.getElementById('materialType').value);
        const h = parseFloat(document.getElementById('height').value) || 0;
        const w = parseFloat(document.getElementById('width').value) || 0;
        const sqft = h * w;
        cost = sqft * rate;
    } else {
        const rate = parseFloat(document.getElementById('printType').value);
        const qty = parseFloat(document.getElementById('quantity').value) || 0;
        cost = rate * qty;
    }

    // Format currency
    const priceEl = document.getElementById('finalPrice');
    if(priceEl) {
        priceEl.innerText = "₹ " + cost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}

function sendQuoteToWhatsapp() {
    // 1. Get Customer Details
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();

    if(!name || !phone) {
        alert("Please enter your Name and Phone Number so we can contact you.");
        return;
    }

    // 2. Get Quote Details
    const category = document.getElementById('serviceCategory').value;
    const price = document.getElementById('finalPrice').innerText;
    let details = "";

    if (category === 'signage') {
        const matSelect = document.getElementById('materialType');
        const material = matSelect.options[matSelect.selectedIndex].text;
        const h = document.getElementById('height').value;
        const w = document.getElementById('width').value;
        details = `Type: ${material}%0ASize: ${w}ft x ${h}ft`;
    } else {
        const printSelect = document.getElementById('printType');
        const product = printSelect.options[printSelect.selectedIndex].text;
        const qty = document.getElementById('quantity').value;
        details = `Product: ${product}%0AQuantity: ${qty}`;
    }

    // 3. Construct WhatsApp URL
    // %0A creates a new line
    const message = `*New Quote Request* 🔔%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A%0A*Requirement:*%0A${details}%0A%0A💰 *Est. Price:* ${price}%0A%0APlease confirm the final price.`;
    
    const waNumber = "919884885789";
    const url = `https://wa.me/${waNumber}?text=${message}`;

    // 4. Open WhatsApp
    window.open(url, '_blank');
}

function sendContactToWhatsapp() {
    const name = document.getElementById('conName').value.trim();
    const phone = document.getElementById('conPhone').value.trim();
    const msg = document.getElementById('conMsg').value.trim();

    if(!name) { alert("Please enter your name."); return; }

    const message = `*New Inquiry* 📩%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A%0A📝 *Message:*%0A${msg}`;
    
    const waNumber = "919884885789";
    const url = `https://wa.me/${waNumber}?text=${message}`;

    window.open(url, '_blank');
}
