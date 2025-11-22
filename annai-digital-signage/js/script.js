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

    // 3. Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.background = '#050505';
            navLinks.style.width = '100%';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid #333';
        });
    }
});

// 4. Price Estimator Logic (Global Functions)
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
        dims.classList.add('hidden'); // Printing usually per piece
        qtyBox.classList.remove('hidden');
    }
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
    document.getElementById('finalPrice').innerText = "₹ " + cost.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
