# Assets Directory

## Structure

- `icons/` - SVG icons, favicon files
- `fonts/` - Custom web fonts (if needed)

## Icons (`icons/`)

### Favicon Files
Include these for broad compatibility:
- `favicon.ico` (16x16, 32x32)
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180)

### SVG Icons
- Use inline SVG or SVG sprites for feature icons
- Keep files optimized (use SVGO or similar)
- Name descriptively: `icon-check.svg`, `icon-shield.svg`, `icon-rocket.svg`

## Fonts (`fonts/`)

### When to Use Custom Fonts
- Brand-specific typography requirements
- Unique visual identity needs

### When to Skip Custom Fonts
- Performance is critical (use system fonts)
- No specific brand requirements

### System Font Stack Example
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Custom Font Implementation
If using custom fonts:
1. Use WOFF2 format (best compression)
2. Include WOFF fallback
3. Use `font-display: swap` for performance
4. Subset fonts to include only needed characters

```css
@font-face {
  font-family: 'CustomFont';
  src: url('../assets/fonts/customfont.woff2') format('woff2'),
       url('../assets/fonts/customfont.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```
