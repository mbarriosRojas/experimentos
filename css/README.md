# CSS Architecture Guide

## File Loading Order

Link these CSS files in `index.html` in this exact order:

```html
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/sections.css">
```

## File Purposes

### 1. reset.css
- Normalize browser default styles
- Set consistent box-sizing
- Remove default margins/padding
- Set base font size

### 2. variables.css
- CSS Custom Properties only
- Colors, spacing, typography, shadows
- Centralized design tokens
- Easy theming and maintenance

### 3. layout.css
- Grid systems and containers
- Flexbox utilities
- Spacing utilities
- Responsive breakpoints
- General layout patterns

### 4. components.css
- Buttons
- Cards
- Form elements (inputs, textareas, labels)
- Reusable UI components
- Component states (hover, focus, active)

### 5. sections.css
- Hero section styles
- Features section styles
- Contact section styles
- Section-specific layouts and customizations

## Best Practices

1. **Use CSS Custom Properties** from `variables.css` throughout all files
2. **Mobile-first** media queries (min-width, not max-width)
3. **BEM-like naming** for clarity (.section__element, .component--modifier)
4. **Avoid deep nesting** - keep specificity low
5. **Group related styles** with comments
6. **Use rem/em units** for scalability

## Example Structure

```css
/* sections.css */

/* ================================
   Hero Section
   ================================ */
.hero {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .hero {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .hero {
    /* Desktop styles */
  }
}

/* ================================
   Features Section
   ================================ */
.features {
  /* Mobile styles */
}

/* ... and so on */
```
