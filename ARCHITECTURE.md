# Landing Mi Producto - Architecture Documentation

## Project Overview
Static landing page built with HTML5 and pure CSS (no JavaScript frameworks).

## Folder Structure

```
/workspace/
├── index.html              # Main landing page
├── css/
│   ├── reset.css          # CSS reset/normalize
│   ├── variables.css      # CSS custom properties
│   ├── layout.css         # Grid, flexbox, layout utilities
│   ├── components.css     # Reusable components
│   └── sections.css       # Section-specific styles
├── images/
│   ├── hero/              # Hero section images
│   ├── features/          # Features section images
│   └── backgrounds/       # Background images
├── assets/
│   ├── icons/             # SVG icons, favicons
│   └── fonts/             # Custom web fonts
├── README.md              # Project documentation
└── ARCHITECTURE.md        # This file
```

## Design Principles

### 1. Semantic HTML5
- Use proper semantic elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`
- Maintain logical heading hierarchy (h1 → h2 → h3)
- Include ARIA labels for accessibility
- Provide alt text for all images

### 2. CSS Architecture

#### File Organization
Files are organized by concern and loaded in this order:

1. **reset.css** - Normalizes browser default styles
2. **variables.css** - CSS Custom Properties for theming
3. **layout.css** - Global layout patterns and utilities
4. **components.css** - Reusable UI components
5. **sections.css** - Section-specific styles

#### Naming Convention
- Use descriptive, BEM-inspired class names
- Examples: `.hero__title`, `.feature-card`, `.contact-form__input`
- Avoid generic names like `.box`, `.item`, `.content`

#### CSS Custom Properties (Variables)
Store in `variables.css`:
```css
:root {
  /* Colors */
  --color-primary: #...;
  --color-secondary: #...;
  --color-text: #...;
  --color-bg: #...;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  
  /* Typography */
  --font-primary: ...;
  --font-size-base: 1rem;
  --line-height: 1.6;
  
  /* Breakpoints (for reference) */
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
}
```

### 3. Responsive Design Strategy

#### Mobile-First Approach
- Base styles target mobile devices (< 768px)
- Use `@media (min-width: ...)` to enhance for larger screens
- Never use `@media (max-width: ...)` to avoid overriding styles

#### Breakpoints
```css
/* Mobile: base styles (no media query) */
/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop (optional) */
@media (min-width: 1440px) { ... }
```

#### Layout Techniques
- **CSS Grid** for section layouts (hero grid, features grid)
- **Flexbox** for component alignment (buttons, form elements, cards)
- **Fluid typography** using `clamp()` or relative units

### 4. Page Sections

#### Hero Section
- **Purpose:** First impression, product introduction
- **Layout:** Full-width, centered content
- **Elements:**
  - Main heading (h1)
  - Subtitle/description
  - Call-to-action button
  - Background image with overlay
- **Height:** 80-100vh on desktop, adaptive on mobile

#### Features Section
- **Purpose:** Showcase product highlights
- **Layout:** Grid-based card system
  - 1 column (mobile)
  - 2 columns (tablet)
  - 3 columns (desktop)
- **Elements per feature:**
  - Icon (SVG)
  - Heading (h3)
  - Description text

#### Contact Section
- **Purpose:** Enable user contact
- **Layout:** Centered form with optional contact info sidebar
- **Elements:**
  - Contact form (name, email, message)
  - Alternative contact information
  - Submit button
- **Accessibility:** Proper labels, focus states, validation feedback

### 5. Performance Optimization

#### Images
- Use WebP format with JPG/PNG fallback
- Provide multiple sizes using `srcset`
- Compress images (target < 200KB per image)
- Lazy-load below-the-fold images

#### CSS
- Keep total CSS under 15-20KB
- Minimize specificity conflicts
- Avoid redundant declarations
- Consider minification for production

#### HTML
- Single-page structure for fast initial load
- Inline critical CSS (optional for production)
- Preload key resources if needed

### 6. Accessibility Checklist
- [ ] Semantic HTML elements
- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Focus indicators for interactive elements
- [ ] Sufficient color contrast (WCAG AA minimum)
- [ ] Form labels and error messages

### 7. Browser Support
- **Target:** Modern browsers (last 2 versions)
  - Chrome/Edge (Chromium)
  - Firefox
  - Safari
- **Required features:**
  - CSS Grid
  - Flexbox
  - CSS Custom Properties
  - CSS `clamp()` (optional enhancement)

### 8. Development Workflow
1. Create HTML structure with semantic elements
2. Build CSS foundation (reset, variables, layout)
3. Develop sections incrementally (hero → features → contact)
4. Test responsiveness at each breakpoint
5. Optimize assets and validate code
6. Cross-browser testing

## Color Scheme Recommendations
(To be finalized during implementation)
- Primary color: Vibrant, attention-grabbing
- Secondary color: Complementary
- Text: High contrast for readability
- Background: Clean, neutral
- Accents: For CTAs and highlights

## Typography Guidelines
- **Headings:** Bold, clear, scalable
- **Body text:** Readable size (16px base minimum)
- **Line height:** 1.5-1.8 for body text
- **Font pairing:** Max 2 font families (heading + body)

## Next Steps
The static-landing subagent should:
1. Create `index.html` with semantic structure
2. Build CSS files in order (reset → variables → layout → components → sections)
3. Add placeholder images with proper structure
4. Test responsive behavior at all breakpoints
5. Validate HTML and CSS
6. Document any deviations or enhancements
