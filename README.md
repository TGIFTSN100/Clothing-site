# Takudzwa Gift Luxury Boutique Website

A modern, elegant e-commerce website for a luxury fashion boutique, built with HTML, CSS, and JavaScript.

## 📁 Project Structure

```
Clothing-site/
├── index.html           # Main HTML file with page structure
├── style.css            # Complete styling and responsive design
├── script.js            # JavaScript for interactivity
├── images/              # Product images folder (placeholder locations)
└── README.md            # This file
```

## ✨ Features

### 1. **Responsive Navigation**
- Sticky navigation bar with logo and menu links
- Mobile-friendly hamburger menu
- Smooth scrolling between sections
- Active link highlighting

### 2. **Hero Section**
- Eye-catching banner with gradient background
- Centered headline "CRAFTED FOR DISTINCTION"
- Animated entrance effect

### 3. **About Section**
- Company description and mission statement
- Professional "READ MORE" call-to-action

### 4. **Appointment Promo**
- Golden accent section
- "BOOK YOUR APPOINTMENT" button

### 5. **Product Collection**
- Responsive grid layout (8 products)
- Product cards with:
  - Product images (placeholder)
  - Product names
  - Pricing
  - "SELECT OPTIONS" buttons
- "VIEW MORE" button for additional products
- Hover animations for better UX

### 6. **Testimonials Section**
- 3-column grid layout (responsive)
- Customer testimonial cards
- Decorative quote marks
- Author attribution

### 7. **Appointment Section**
- Dark themed section with CTA
- "BOOK AN APPOINTMENT" button

### 8. **Footer**
- Multi-column layout
- Company information
- Quick links
- Contact information (phone and email)
- Social media links (Twitter, Facebook, Instagram)
- Copyright notice

## 🎨 Design Features

- **Color Scheme:**
  - Primary: Black (#000)
  - Accent: Gold (#d4af37)
  - Background: Light gray (#f9f9f9)
  - Text: Dark gray (#333)

- **Typography:**
  - Clean, modern sans-serif font
  - Letter-spacing for luxury feel
  - Proper hierarchy with varied font sizes

- **Interactive Elements:**
  - Smooth transitions and hover effects
  - Button state changes
  - Product card hover animations
  - Scroll-triggered animations

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px - 1199px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🚀 Getting Started

1. **Open the website:**
   - Simply open `index.html` in your web browser
   - No server required for basic functionality

2. **Add Product Images:**
   - Replace placeholder image paths in `index.html`
   - Place actual product images in the `images/` folder
   - Image paths to update:
     - `images/unisex-sneakers.jpg`
     - `images/slides.jpg`
     - `images/socks.jpg`
     - `images/snap-back.jpg`
     - `images/insulated-bottle.jpg`
     - `images/beenie.jpg`
     - `images/high-boots.jpg`
     - `images/slides-2.jpg`

3. **Customize Content:**
   - Update product names and prices
   - Modify descriptions and testimonials
   - Change contact information
   - Update social media links

## 🔧 Customization Guide

### Change Brand Colors
Edit these color values in `style.css`:
```css
/* Primary color (gold) */
#d4af37

/* Secondary color (black) */
#000

/* Text color */
#333
```

### Modify Button Styling
Update button classes in `style.css`:
- `.btn-primary` - Primary buttons (black with gold hover)
- `.btn-secondary` - Secondary buttons (outlined)
- `.btn-light` - Light buttons (for dark backgrounds)

### Add New Products
1. Duplicate a product card in `index.html`
2. Update product name, price, and image path
3. Grid will automatically adjust

### Connect to Backend
The website includes JavaScript functions ready for backend integration:
- `addToCart()` - Add product to shopping cart
- `subscribeNewsletter()` - Process newsletter subscriptions
- `validateForm()` - Form submission handling
- `filterByPrice()` - Filter products by price range
- `searchProducts()` - Search functionality

## 🎯 JavaScript Functionality

### Mobile Menu
- Toggle menu on hamburger click
- Close menu when link is clicked
- Close menu when clicking outside

### Smooth Scrolling
- All anchor links scroll smoothly
- Navigation jumps to sections elegantly

### Animations
- Scroll-triggered animations for products and testimonials
- Lazy loading for images (when configured)
- Hover effects on cards

### Active Navigation
- Highlights current section in navigation
- Updates as user scrolls

## 📧 Contact Information

Default contact details in footer:
- **Phone:** +263 789 795 764
- **Email:** info@takuegift.store

## 🔐 SEO & Meta Tags

- Responsive viewport meta tag
- Proper HTML semantic structure
- Readable font sizes and colors

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Future Enhancements

- [ ] Product search functionality
- [ ] Shopping cart system
- [ ] User account creation
- [ ] Product reviews and ratings
- [ ] Payment gateway integration
- [ ] Email newsletter system
- [ ] Live chat support
- [ ] Product filtering by category
- [ ] Wishlist functionality
- [ ] Order tracking

## 📄 License

© 2026 Takudzwa Gift Luxury Boutique. All Rights Reserved.

## 📞 Support

For customization and integration support, contact:
- **Email:** info@takuegift.store
- **Phone:** +263 242 702 853

---

**Last Updated:** March 2026
**Version:** 1.0
