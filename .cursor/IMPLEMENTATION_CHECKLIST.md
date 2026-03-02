# Implementation Checklist for Static-Landing Subagent

## Quick Reference

### File Creation Order
1. ✅ Folder structure (DONE by architect)
2. ⏳ `index.html` - Create HTML skeleton
3. ⏳ `css/reset.css` - Browser normalization
4. ⏳ `css/variables.css` - Design tokens
5. ⏳ `css/layout.css` - Layout foundation
6. ⏳ `css/components.css` - UI components
7. ⏳ `css/sections.css` - Section styles

### HTML Structure Template
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Producto - [Description]</title>
  <!-- CSS Files in Order -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/sections.css">
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/icons/favicon-32x32.png">
</head>
<body>
  <!-- Hero Section -->
  <section class="hero">
    <!-- Content -->
  </section>
  
  <!-- Features Section -->
  <section class="features">
    <!-- Content -->
  </section>
  
  <!-- Contact Section -->
  <section class="contact">
    <!-- Content -->
  </section>
</body>
</html>
```

### CSS Variable Examples
```css
/* css/variables.css */
:root {
  /* Colors */
  --color-primary: #0066cc;
  --color-secondary: #ff6b35;
  --color-text: #333333;
  --color-bg: #ffffff;
  --color-bg-alt: #f8f9fa;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 6rem;
  
  /* Typography */
  --font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 3rem;
  --line-height: 1.6;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}
```

### Responsive Breakpoints
```css
/* Mobile: base styles (no media query needed) */

/* Tablet */
@media (min-width: 768px) {
  /* Tablet-specific styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop-specific styles */
}

/* Large Desktop (optional) */
@media (min-width: 1440px) {
  /* Large screen enhancements */
}
```

### Section Requirements

#### Hero Section
- [ ] Full-width background
- [ ] Centered content container
- [ ] h1 heading (main product title)
- [ ] Subtitle/description text
- [ ] Primary CTA button
- [ ] Responsive height (80vh-100vh desktop, adaptive mobile)

#### Features Section
- [ ] Section heading (h2)
- [ ] 3 feature cards minimum
- [ ] Each card: icon + h3 title + description
- [ ] Grid layout: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- [ ] Hover effects on cards

#### Contact Section
- [ ] Section heading (h2)
- [ ] Contact form with fields: name, email, message
- [ ] Submit button
- [ ] Proper form labels and accessibility
- [ ] Optional: contact info display (email, phone)

### Testing Checklist
- [ ] HTML validates (W3C validator)
- [ ] CSS validates (W3C CSS validator)
- [ ] Responsive at 375px (mobile)
- [ ] Responsive at 768px (tablet)
- [ ] Responsive at 1024px (desktop)
- [ ] Responsive at 1440px (large desktop)
- [ ] All images have alt text
- [ ] Form is keyboard accessible
- [ ] Color contrast meets WCAG AA
- [ ] No console errors

### Performance Checklist
- [ ] CSS total size < 20KB
- [ ] Images optimized and compressed
- [ ] No unused CSS rules
- [ ] Proper image formats (WebP preferred)

### Accessibility Checklist
- [ ] Semantic HTML elements used
- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Form labels properly associated
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] Sufficient color contrast

## Documentation References
- See `ARCHITECTURE.md` for complete technical specifications
- See `css/README.md` for CSS loading order and best practices
- See `images/README.md` for image guidelines
- See `assets/README.md` for icon and font guidelines

## Notes
- Use placeholder images during development (https://placehold.co/ or https://picsum.photos/)
- Replace with actual content before final validation
- Document any deviations from architecture plan in scratchpad
- Update scratchpad progress after each major milestone
