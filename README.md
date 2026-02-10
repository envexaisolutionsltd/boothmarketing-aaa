# Rose Garden Background Design with Text Overlay

A comprehensive design solution featuring a beautiful rose garden background with highly readable text overlays, built with React and Tailwind CSS.

## Features

### Visual Design
- **Rose Garden Background**: Beautiful rose garden scene with various colored roses (red, pink, white, yellow)
- **Interactive Controls**: Real-time adjustment of text styles, colors, and background opacity
- **Multiple Text Effects**: Drop shadows, outlines, background boxes, and glow effects
- **Responsive Design**: Optimized for all screen sizes

### Accessibility & Readability
- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **High Contrast**: Minimum 4.5:1 contrast ratio maintained
- **Multiple Text Styles**: Various options to ensure readability across different background areas
- **Screen Reader Friendly**: Proper semantic markup and alt text

### Text Effect Options

#### 1. Drop Shadow
- Creates depth and separation from background
- Multiple shadow intensities available
- Best for general use across varied backgrounds

#### 2. Text Outline/Stroke
- Adds contrasting border around text
- Excellent for high-contrast readability
- Available in black or white outlines

#### 3. Background Boxes
- Semi-transparent backgrounds behind text
- Backdrop blur for modern glass effect
- Guaranteed readability regardless of background

#### 4. Text Glow
- Subtle glow effects for emphasis
- Available in white, blue, and pink variants
- Great for headings and call-to-action text

## Technical Implementation

### CSS Classes Available

```css
/* Drop Shadows */
.text-shadow-sm, .text-shadow-md, .text-shadow-lg, .text-shadow-xl

/* Text Strokes */
.text-stroke-1, .text-stroke-2, .text-stroke-white-1, .text-stroke-white-2

/* Background Overlays */
.bg-overlay, .bg-overlay-light, .bg-overlay-gradient

/* Text Glow Effects */
.text-glow-white, .text-glow-blue, .text-glow-pink
```

### Color Recommendations

**High Contrast Text Colors:**
- White text with dark shadows/outlines
- Black text with light backgrounds
- Dark blue (#1e3a8a) for professional look
- Dark green (#14532d) for natural themes

**Colors to Avoid:**
- Red or pink text over rose areas
- Low contrast combinations
- Colors that blend with foliage

## Usage

### Basic Implementation

```jsx
import RoseGardenDesign from './components/RoseGardenDesign';
import './styles/text-effects.css';

function App() {
  return <RoseGardenDesign />;
}
```

### Custom Text with Effects

```jsx
<h1 className="text-white text-6xl font-bold text-shadow-lg">
  Your Heading Here
</h1>

<p className="text-black bg-overlay-light">
  Your content with background box
</p>

<span className="text-white text-stroke-2 text-glow-white">
  Emphasized text with multiple effects
</span>
```

## Design Guidelines

### Text Placement Strategy
1. **High Contrast Areas**: Place primary text in areas with good contrast variation
2. **Avoid Rose Centers**: Don't place red/pink text directly over roses
3. **Use Foliage Areas**: Green foliage provides good contrast for light text
4. **Layer Effects**: Combine multiple effects for maximum readability

### Responsive Considerations
- Font sizes automatically adjust for mobile, tablet, and desktop
- Text effects scale appropriately
- Background opacity can be adjusted for better mobile readability

### Accessibility Features
- High contrast mode support
- Reduced motion preferences respected
- Print-friendly styles
- Focus indicators for keyboard navigation
- Color-blind friendly alternatives

## Browser Support
- Modern browsers with CSS backdrop-filter support
- Graceful degradation for older browsers
- Print stylesheet included
- Mobile-optimized touch interactions

## Performance
- Optimized background images from Pexels
- CSS-only effects (no JavaScript animations)
- Minimal bundle size impact
- Lazy loading for background images

## Customization

The design is fully customizable through:
- Interactive control panel
- CSS custom properties
- Component props
- Tailwind CSS utilities

Perfect for:
- Wedding websites
- Garden center marketing
- Floral business branding
- Nature photography portfolios
- Romantic event invitations