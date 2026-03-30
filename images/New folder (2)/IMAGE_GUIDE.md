# Image Placement Guide

This folder contains all product and site images for the Mudiwa Hood Luxury Boutique website.

## Image Locations & Specifications

### Product Images
Place the following images in this `images/` folder:

| Filename | Product | Recommended Dimensions | Format |
|----------|---------|----------------------|--------|
| `unisex-sneakers.jpg` | Unisex Sneakers | 500x500px | JPG/PNG |
| `slides.jpg` | Slides | 500x500px | JPG/PNG |
| `socks.jpg` | Socks | 500x500px | JPG/PNG |
| `snap-back.jpg` | Snap Back | 500x500px | JPG/PNG |
| `insulated-bottle.jpg` | Insulated Bottle | 500x500px | JPG/PNG |
| `beenie.jpg` | Beenie | 500x500px | JPG/PNG |
| `high-boots.jpg` | High Boots | 500x500px | JPG/PNG |
| `slides-2.jpg` | Slides Premium | 500x500px | JPG/PNG |

## Image Guidelines

### Recommended Specifications
- **Resolution:** 500x500 pixels (for products)
- **Format:** JPG or PNG
- **File Size:** 100-300 KB per image (optimized)
- **Background:** Preferably white or light gray for consistency
- **Quality:** High quality, professional product photography

### Best Practices
1. **Consistency:** Use consistent lighting and background colors across all product images
2. **Optimization:** Compress images to reduce file size without losing quality
3. **Aspect Ratio:** Maintain square aspect ratio for product thumbnails
4. **Clarity:** Ensure products are clear and centered in the image
5. **Color Accuracy:** Accurate color representation for online shopping

### Tools for Image Optimization
- **TinyPNG** (tinypng.com) - Image compression
- **Photoshop** - Professional editing
- **GIMP** - Free alternative to Photoshop
- **Canva** - Simple design and editing
- **ImageMagick** - Command-line tool

## Image Placeholder Instructions

While you're gathering product images, you can use these temporary solutions:

### Option 1: Use Placeholder Service
Replace image src with:
```html
<img src="https://via.placeholder.com/500x500?text=Product+Name" alt="Product Name">
```

### Option 2: Create Simple Placeholders
Use online tools like:
- https://placeholder.com/
- https://via.placeholder.com/
- https://placeimg.com/

### Option 3: Temporary Gray Background
Use CSS background color temporarily:
```css
.product-image {
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

## Updating Images in HTML

Once you have images ready, update the image paths in `index.html`:

### Current placeholders:
```html
<img src="images/product-name.jpg" alt="Product Name">
```

### After adding your images:
Simply place your images in this folder with the correct filenames.

## Hero Section Background (Optional)

The hero section currently uses a CSS gradient. To add a background image:

1. Add a high-quality image (2000x600px recommended)
2. Update the `.hero` CSS in `style.css`:
```css
.hero {
    background: url('images/hero-background.jpg') center/cover no-repeat;
    background-attachment: fixed;
}
```

## Quick Image Checklist

- ✅ Product images captured
- ✅ Images named correctly
- ✅ Images placed in images folder
- ✅ Images optimized for web
- ✅ Consistent sizing and quality
- ✅ All products have images

## Color and Mood

The Mudiwa Hood brand emphasizes:
- **Luxury** - Premium quality products
- **Elegance** - Sophisticated styling
- **Exclusivity** - High-end fashion
- **Professionalism** - Expert service

Ensure your product photography reflects these values.

## Future Enhancements

- [ ] Add hover zoom effect to product images
- [ ] Implement image gallery (multiple angles)
- [ ] Add product video demonstrations
- [ ] Implement 360° product view
- [ ] Add before/after comparison images
- [ ] User-generated content gallery

---

For questions about image specifications or placement, refer to the main README.md file.
