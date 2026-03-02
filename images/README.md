# Images Directory

## Structure

- `hero/` - Images for the hero section (background, product shots)
- `features/` - Images and illustrations for feature cards
- `backgrounds/` - Background images, patterns, textures

## Image Guidelines

### Format Recommendations
- **Photos:** WebP with JPG fallback
- **Graphics/Illustrations:** WebP, PNG, or SVG
- **Icons:** Use SVG (stored in `/assets/icons/`)

### Optimization
- Compress all images before adding
- Target file size < 200KB per image
- Use appropriate dimensions for usage context

### Responsive Images
Use `srcset` for multiple resolutions:
```html
<img src="images/hero/product.jpg"
     srcset="images/hero/product-small.jpg 480w,
             images/hero/product-medium.jpg 768w,
             images/hero/product-large.jpg 1200w"
     sizes="100vw"
     alt="Product description">
```

### Naming Convention
- Use lowercase, hyphen-separated names
- Be descriptive: `hero-background.jpg`, `feature-icon-security.png`
- Include size suffix if multiple versions: `product-small.jpg`, `product-large.jpg`

## Placeholder Images
During development, you can use placeholder services:
- https://via.placeholder.com/
- https://picsum.photos/
- https://placehold.co/

Replace with actual images before production.
