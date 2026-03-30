// ============================================
// PRODUCT PICKER SCROLL FUNCTIONALITY
// ============================================
const productPicker = document.getElementById('productPicker');
const productItems = document.querySelectorAll('.product-item');
const selectedProductName = document.getElementById('selectedProductName');
const selectedProductPrice = document.getElementById('selectedProductPrice');

if (productPicker && productItems.length > 0) {
    let scrollTimeout;
    
    // Update picker on scroll
    productPicker.addEventListener('scroll', function() {
        updatePickerSelection();
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Auto-snap on scroll end
        scrollTimeout = setTimeout(snapToCenter, 300);
    }, false);
    
    // Initialize first product
    setTimeout(updatePickerSelection, 100);
}

function updatePickerSelection() {
    if (!productPicker || productItems.length === 0) return;
    
    const containerHeight = productPicker.clientHeight;
    const centerPoint = productPicker.scrollTop + containerHeight / 2;
    
    let closestItem = null;
    let closestDistance = Infinity;
    
    productItems.forEach((item, index) => {
        // Calculate item position relative to scroll
        const itemTop = item.offsetTop;
        const itemHeight = item.clientHeight;
        const itemCenter = itemTop + itemHeight / 2;
        const distance = Math.abs(itemCenter - centerPoint);
        
        // Remove all classes
        item.classList.remove('active', 'near');
        
        // Calculate opacity based on distance
        const maxDistance = containerHeight;
        const opacity = Math.max(0.3, 1 - (Math.abs(distance) / maxDistance) * 0.7);
        item.style.opacity = opacity;
        
        // Track closest item
        if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = { item, index };
        }
    });
    
    // Highlight active and near items
    if (closestItem) {
        closestItem.item.classList.add('active');
        closestItem.item.style.opacity = '1';
        
        // Mark neighbors as "near"
        if (closestItem.index > 0) {
            productItems[closestItem.index - 1].classList.add('near');
        }
        if (closestItem.index < productItems.length - 1) {
            productItems[closestItem.index + 1].classList.add('near');
        }
        
        // Update product details
        const name = closestItem.item.querySelector('.product-item-name').textContent;
        const price = closestItem.item.querySelector('.product-item-price').textContent;
        
        selectedProductName.textContent = name;
        selectedProductPrice.textContent = price;
    }
}

function snapToCenter() {
    if (!productPicker || productItems.length === 0) return;
    
    let closestItem = null;
    let closestDistance = Infinity;
    
    const containerHeight = productPicker.clientHeight;
    const centerPoint = productPicker.scrollTop + containerHeight / 2;
    
    productItems.forEach((item) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.clientHeight;
        const itemCenter = itemTop + itemHeight / 2;
        const distance = Math.abs(itemCenter - centerPoint);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
        }
    });
    
    if (closestItem) {
        const itemHeight = closestItem.clientHeight;
        const targetScroll = closestItem.offsetTop - containerHeight / 2 + itemHeight / 2;
        
        productPicker.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// ADD TO CART FUNCTIONALITY
// ============================================
function addToCart(productName) {
    alert(`${productName} added to cart!`);
    // Here you would implement actual cart functionality
}

// ============================================
// FORM VALIDATION
// ============================================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            alert('Form submitted successfully!');
        });
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// SCROLL ANIMATION
// ============================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Run animation on page load
window.addEventListener('load', animateOnScroll);

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
function searchProducts(keyword) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        if (title.includes(keyword.toLowerCase())) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// ============================================
// FILTER PRODUCTS BY PRICE
// ============================================
function filterByPrice(minPrice, maxPrice) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const priceText = product.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        
        if (price >= minPrice && price <= maxPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// ============================================
// NEWSLETTER SUBSCRIPTION
// ============================================
function subscribeNewsletter(email) {
    if (validateEmail(email)) {
        alert('Thank you for subscribing!');
        // Here you would send the email to your backend
        return true;
    } else {
        alert('Please enter a valid email address');
        return false;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// CART COUNTER
// ============================================
let cartCount = 0;

function updateCartCount(quantity = 1) {
    cartCount += quantity;
    const cartElement = document.querySelector('.cart-count');
    if (cartElement) {
        cartElement.textContent = cartCount;
    }
}

// ============================================
// PRODUCT QUICK VIEW
// ============================================
function openQuickView(productId) {
    const modal = document.getElementById(`quickview-${productId}`);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeQuickView(productId) {
    const modal = document.getElementById(`quickview-${productId}`);
    if (modal) {
        modal.style.display = 'none';
    }
}

// ============================================
// ACTIVE NAV LINK
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
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

// ============================================
// ADD ACTIVE CLASS STYLING
// ============================================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #d4af37;
        border-bottom: 2px solid #d4af37;
    }
`;
document.head.appendChild(style);

console.log('🏪 Takudzwa Gift Luxury Boutique - All systems ready!');
