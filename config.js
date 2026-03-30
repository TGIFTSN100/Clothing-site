/**
 * Mudiwa Hood Luxury Boutique - Site Configuration
 * This file contains all customizable settings for the website
 */

const SiteConfig = {
  // ============================================
  // BRAND SETTINGS
  // ============================================
  brand: {
    name: "Takudzwa Gift Luxury Boutique",
    tagline: "Crafted for Distinction",
    tagline2: "Exquisite Style, Exceptional Taste",
    shortName: "TG",
    year: 2026,
    description: "Driven by a passion for fashion and a commitment to excellence, Takudzwa Gift Store offers discerning clientele an unparalleled shopping experience."
  },

  // ============================================
  // COLOR SCHEME
  // ============================================
  colors: {
    primary: "#000000",        // Primary black
    secondary: "#d4af37",      // Gold accent
    text: "#333333",           // Main text color
    lightText: "#666666",      // Secondary text
    lightGray: "#f9f9f9",      // Light background
    white: "#ffffff",          // White
    dark: "#1a1a1a",          // Dark background
    border: "#e0e0e0"         // Border color
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0789795764",
    email: "info@takudzwagift.store",
    address: "Luxury Fashion District",
    city: "Zimbabwe"
  },

  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  social: {
    twitter: "https://twitter.com/takudzwagift",
    facebook: "https://www.facebook.com/takudzwagift",
    instagram: "https://www.instagram.com/takudzwagift/",
    linkedin: "https://linkedin.com/company/takudzwagift"
  },

  // ============================================
  // NAVIGATION MENU
  // ============================================
  navigation: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "COLLECTION", href: "#collection" },
    { label: "APPOINTMENT", href: "#appointment" },
    { label: "CONTACT", href: "#contact" }
  ],

  // ============================================
  // PRODUCT CATEGORIES
  // ============================================
  categories: [
    { id: 1, name: "Footwear", icon: "fa-shoe-prints" },
    { id: 2, name: "Headwear", icon: "fa-hat-cowboy" },
    { id: 3, name: "Accessories", icon: "fa-ring" },
    { id: 4, name: "Clothing", icon: "fa-shirt" }
  ],

  // ============================================
  // PAYMENT METHODS
  // ============================================
  paymentMethods: [
    { name: "Credit Card", icon: "fa-credit-card" },
    { name: "PayPal", icon: "fa-paypal" },
    { name: "Bank Transfer", icon: "fa-bank" },
    { name: "Mobile Money", icon: "fa-mobile-alt" }
  ],

  // ============================================
  // SHIPPING OPTIONS
  // ============================================
  shipping: [
    { id: 1, name: "Standard Shipping", days: "5-7", cost: 10 },
    { id: 2, name: "Express Shipping", days: "2-3", cost: 25 },
    { id: 3, name: "Overnight Shipping", days: "1", cost: 50 },
    { id: 4, name: "Local Pickup", days: "1", cost: 0 }
  ],

  // ============================================
  // ANIMATION SETTINGS
  // ============================================
  animations: {
    duration: "0.3s",
    easing: "ease",
    scrollBehavior: "smooth"
  },

  // ============================================
  // RESPONSIVE BREAKPOINTS
  // ============================================
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1200
  },

  // ============================================
  // API ENDPOINTS (for backend integration)
  // ============================================
  api: {
    baseUrl: "https://api.mudiwahood.store/v1",
    endpoints: {
      products: "/products",
      cart: "/cart",
      orders: "/orders",
      appointments: "/appointments",
      newsletter: "/newsletter",
      contact: "/contact"
    }
  },

  // ============================================
  // FEATURE FLAGS
  // ============================================
  features: {
    searchEnabled: true,
    filterEnabled: true,
    cartEnabled: true,
    wishlistEnabled: false,
    userAccountsEnabled: false,
    productReviewsEnabled: true,
    appointmentBookingEnabled: true,
    newsletterSubscriptionEnabled: true,
    liveChat: false,
    productCompare: false
  },

  // ============================================
  // NOTIFICATION SETTINGS
  // ============================================
  notifications: {
    showWelcomeMessage: true,
    cartNotifications: true,
    orderConfirmation: true,
    emailReminders: true
  },

  // ============================================
  // SEO SETTINGS
  // ============================================
  seo: {
    title: "Takudzwa Gift Luxury Boutique | Premium Fashion",
    description: "Discover luxury fashion at Takudzwa Gift Boutique. Premium clothing, accessories, and exclusive designs for discerning customers.",
    keywords: ["luxury fashion", "boutique", "premium clothing", "designer accessories"],
    ogImage: "images/og-image.jpg",
    twitterHandle: "@takudzwagift"
  },

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  getColor: function(colorName) {
    return this.colors[colorName] || this.colors.primary;
  },

  getContactInfo: function() {
    return this.contact;
  },

  getSocialLinks: function() {
    return this.social;
  },

  isFeatureEnabled: function(featureName) {
    return this.features[featureName] || false;
  },

  getApiEndpoint: function(endpoint) {
    return this.api.baseUrl + this.api.endpoints[endpoint];
  },

  // ============================================
  // EXPORT FOR USE IN HTML/JS
  // ============================================
  init: function() {
    console.log("🏪 " + this.brand.name + " - Configuration loaded");
    return this;
  }
};

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SiteConfig.init());
} else {
  SiteConfig.init();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SiteConfig;
}
