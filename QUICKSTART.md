# Quick Start Guide - Mudiwa Hood Luxury Boutique

Get your luxury boutique website up and running in minutes!

## 📋 What You Have

```
Clothing-site/
├── index.html               ← Main website file
├── style.css                ← Website styling
├── script.js                ← Interactive functionality
├── config.js                ← Site configuration
├── products.json            ← Product data
├── images/                  ← Image folder (empty - add your images here)
├── README.md                ← Full documentation
├── QUICKSTART.md            ← This file
└── images/IMAGE_GUIDE.md    ← Image specifications
```

## 🚀 Getting Started (5 Minutes)

### Step 1: Open the Website
1. Open the `Clothing-site` folder in your file explorer
2. Double-click `index.html` to open in your browser
3. ✅ Website is live! (Basic version with placeholder images)

### Step 2: Add Your Product Images
1. Prepare 8 product images (500x500px recommended)
2. Name them exactly as shown in `images/IMAGE_GUIDE.md`
3. Copy them to the `images/` folder
4. Refresh your browser - images will appear!

### Step 3: Customize Your Content
Edit `index.html` and update:
- Company name and description
- Product names and prices
- Testimonial text and author names
- Contact phone and email

## 🎨 Customization Quick Tips

### Change Brand Colors
Edit these in `style.css`:
```css
#d4af37  /* Change this for gold color */
#000000  /* Change this for black color */
```

### Update Contact Information
In `index.html`, find and replace:
- `+263 242 702 853` → Your phone number
- `info@mudiwahood.store` → Your email

### Modify Product Names/Prices
In `index.html`, locate each product card:
```html
<h3>Product Name</h3>          ← Change product name
<p class="product-price">$XX.XX</p>  ← Change price
```

## 📱 Test on Mobile
1. Open website in browser
2. Press `F12` (or right-click → Inspect)
3. Click the mobile phone icon (top-left of developer tools)
4. Check responsiveness on different screen sizes

## 🔗 Link Navigation
Update links in `index.html` to point to real pages:
- `href="#home"` → Points to Home section
- `href="tel:+263242702853"` → Clicking calls the phone number
- `href="mailto:info@mudiwahood.store"` → Clicking opens email

## 🎯 Next Steps

### For a Local Website
1. Website is ready to use locally! 
2. Just open `index.html` in any browser

### To Deploy Online
1. Get web hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP client
3. Point domain to your hosting

### To Add E-Commerce
1. Update `products.json` with your products
2. Use config.js API endpoints to connect to backend
3. Implement cart and checkout functionality

### To Add Booking System
1. Integrate a calendar/booking plugin
2. Connect appointment emails
3. Add payment processing

## 🆘 Troubleshooting

### Images Not Showing?
- ✅ Check image filenames match exactly
- ✅ Images are in `images/` folder
- ✅ Refresh browser (Ctrl+F5)

### Buttons Not Working?
- ✅ Currently show alert messages (placeholder behavior)
- ✅ Connect to backend for real functionality
- ✅ Update `script.js` functions

### Mobile Menu Not Working?
- ✅ Check JavaScript console for errors (F12)
- ✅ Ensure `script.js` is loaded
- ✅ Clear browser cache

## 📞 Important Contact Fields

Update these in the footer:
```html
<a href="tel:+263242702853">+263 242 702 853</a>
<a href="mailto:info@mudiwahood.store">info@mudiwahood.store</a>
```

## 🎓 Feature Overview

| Feature | Status | Location |
|---------|--------|----------|
| Navigation | ✅ Working | `index.html` nav |
| Mobile Menu | ✅ Working | Mobile responsive |
| Product Gallery | ✅ Working | Collection section |
| Testimonials | ✅ Working | Testimonials section |
| Contact Info | ✅ Working | Footer |
| Shopping Cart | 📝 Placeholder | `script.js` |
| User Accounts | 📝 Not included | Requires backend |
| Appointments | 📝 Placeholder | Needs backend |
| Checkout | 📝 Not included | Requires payment gateway |

## 📊 File Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `index.html` | Structure & content | Adding/editing products, text |
| `style.css` | Design & colors | Changing colors, layouts |
| `script.js` | Functionality | Adding features, interactions |
| `config.js` | Settings | Centralizing configuration |
| `products.json` | Product data | Adding product details |

## 💡 Pro Tips

1. **Use Browser DevTools (F12)** to test responsive design
2. **Keep backup** of original files before making changes
3. **Test on real devices** (phone, tablet, desktop)
4. **Use tools like TinyPNG** to compress images
5. **Validate HTML** at validator.w3.org

## 🔐 Important Files to Keep

- ✅ `index.html` - Must have
- ✅ `style.css` - Must have
- ✅ `script.js` - Should have (for interactivity)
- ✅ `images/` - Should have (for products)
- ⚠️ `config.js` - Optional (for organization)
- ⚠️ `products.json` - Optional (if using static)

## 🎬 Demo Content Ready

The website comes with:
- ✅ Full navigation
- ✅ Hero section
- ✅ About section
- ✅ 8 sample products
- ✅ 3 testimonials
- ✅ Complete footer

## 📈 To Scale This Website

1. **Add Backend Server** (Node.js, Python, PHP)
2. **Setup Database** (MongoDB, MySQL)
3. **Create Admin Dashboard** (for managing products)
4. **Add Payment Gateway** (Stripe, PayPal)
5. **Setup Email System** (SendGrid, Mailgun)
6. **Add Analytics** (Google Analytics)

## 🎉 You're All Set!

Your luxury boutique website is ready to go. Start by:
1. Adding your product images
2. Updating your business information
3. Sharing the website!

---

## Quick Edit Locations

**Want to change something quickly?** Find it here:

- 📝 Brand name: `index.html` line ~19
- 📝 Product names: `index.html` lines ~115-225
- 📝 Product prices: `index.html` lines ~115-225
- 📝 Colors: `style.css` lines ~85-93
- 📝 Contact info: `index.html` lines ~280-290
- 📝 Product images: `images/` folder

---

**Questions? Check README.md for detailed information**

Happy selling! 🎉
