# 🌶️ The Spicy Spoon – Professional HubSpot CMS Theme

A modern, responsive HubSpot CMS theme designed for spicy food blogs and recipe websites. Inspired by leading recipe platforms like Allrecipes, BBC Good Food, and Serious Eats.

## ✨ Features

### 🎨 Professional Design
- **Modern Recipe Cards** with ratings, heat levels, and badges
- **Hero Search Bar** with popular search suggestions
- **Curated Collections** with engaging grid layouts
- **Mobile-First Responsive** design with smooth animations
- **Accessibility Compliant** with ARIA labels and keyboard navigation

### 🔧 Theme Customization
- **Brand Colors** (Primary, Accent, Success, Warning, Neutrals)
- **Typography Controls** (Font families, sizes, heading scales)
- **Layout Settings** (Container widths, spacing, border radius)
- **Recipe Display Options** (Card ratios, ratings, difficulty, nutrition)
- **Search & Filter Controls** (Enable/disable features, results per page)

### 🏗️ Professional Components
- **Sticky Header** with mobile navigation and category chips
- **Hero Section** with search and quick stats
- **Recipe Grid** with ratings, meta info, and heat levels
- **Collection Cards** with badges and hover effects
- **Newsletter Signup** with gradient background
- **Social Media Integration** ready
- **Print-Friendly Stylesheet** for recipes

### 🚀 Performance & SEO
- **Google Fonts** (Inter + Playfair Display) with preload
- **Lazy Loading** images with proper alt text
- **JSON-LD Structured Data** for recipes
- **Open Graph & Twitter Cards** meta tags
- **Critical CSS** inlined for fast loading
- **Skeleton Loading** states

## 🎯 Quick Start

### 1. Upload to HubSpot
```bash
hs upload the-spicy-spoon the-spicy-spoon --account your-account
```

### 2. Create Your First Page
1. Go to **Marketing → Website → Website Pages**
2. Click **Create → Website Page**
3. Select **"The Spicy Spoon"** theme
4. Choose **"Home - Spicy Recipes"** template
5. Customize your content!

### 3. Configure Theme Settings
1. In the page editor, click **"Theme Settings"** in the sidebar
2. Customize your brand colors under **"Brand & Colors"**
3. Adjust typography in **"Typography"** section
4. Set layout preferences in **"Layout & Spacing"**

## 🎨 Customization Guide

### Brand Colors
The theme includes a comprehensive color system:

- **Primary Color** (`#B71C1C`) - Main brand color for buttons, links
- **Accent Color** (`#FF6D00`) - Secondary actions, hover states
- **Success** (`#2E7D32`) - Positive actions, ratings
- **Warning** (`#F57C00`) - Heat indicators, alerts
- **Neutral Scale** - Text and background variations

### Typography
Professional font combinations:
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (modern sans-serif)
- **Customizable**: Font sizes, heading scales, line heights

### Recipe Display
- **Card Aspect Ratios**: 4:3 (landscape), 1:1 (square), 3:4 (portrait)
- **Heat Level Display**: 🌶️ icons with intensity
- **Rating System**: 5-star ratings with review counts
- **Meta Information**: Cook time, cuisine, difficulty

## 📄 Available Templates

### 🏠 `home.html` - Homepage
- Hero section with search bar
- Featured collections grid
- Popular recipes showcase
- Spice knowledge tips

### 📝 `recipes.html` - Recipe Listing
- Filter sidebar (collapsible on mobile)
- Sort options and search results
- Recipe grid with pagination
- Active filter chips

### 🍳 `recipe-detail.html` - Individual Recipe
- Large hero image with meta info
- Sticky action bar (Save, Print, Jump to recipe)
- Ingredient checklist with checkboxes
- Step-by-step instructions
- Nutrition panel and related recipes

### 📚 `collections.html` - Recipe Collections
- Collection showcase with descriptions
- Featured and popular collections
- Category-based browsing

## 🎯 Content Strategy

### Heat Level System
Use consistent heat indicators across all recipes:
- 🌶️ **Mild** (1-2 peppers)
- 🌶️🌶️ **Medium** (2-3 peppers)  
- 🌶️🌶️🌶️ **Hot** (3-4 peppers)
- 🌶️🌶️🌶️🌶️ **Very Hot** (4-5 peppers)
- 🌶️🌶️🌶️🌶️🌶️ **Volcanic** (5 peppers)

### Recipe Categories
Organize content with these suggested categories:
- **Thai**, **Mexican**, **Indian**, **Korean**, **Cajun**, **Chinese**
- **Appetizers**, **Main Dishes**, **Sauces**, **Marinades**
- **Quick Meals** (30 min), **Weekend Projects**, **Beginner-Friendly**

### SEO Best Practices
- Use descriptive titles with heat levels
- Include cooking time and difficulty in meta descriptions
- Add proper alt text to all recipe images
- Structure content with proper headings (H1, H2, H3)

## 🖼️ Image Guidelines

### Hero Images
- **Size**: 1200×600px minimum
- **Format**: JPG or WebP for photos, SVG for graphics
- **Content**: Show the finished dish with vibrant colors

### Recipe Cards
- **Size**: 400×300px (4:3 ratio)
- **Quality**: High-resolution, well-lit food photography
- **Consistency**: Similar styling and backgrounds

### Placeholder Images
The theme includes professional placeholder SVGs:
- `hero.svg` - Main hero sections
- `card-1.svg` - Recipe cards (spicy theme)
- `card-2.svg` - Fresh/herb recipes  
- `card-3.svg` - Comfort food recipes

## 🎨 Advanced Customization

### CSS Custom Properties
All theme variables are customizable via CSS:

```css
:root {
  --color-primary: #B71C1C;
  --color-accent: #FF6D00;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --border-radius: 8px;
  --container-width: 1200px;
}
```

### Theme Settings Integration
Colors and typography automatically sync from HubSpot theme settings:

```css
--color-primary: {{ theme_settings.brand.primary_color.color or '#B71C1C' }};
--font-heading: {{ theme_settings.typography.heading_font or "'Playfair Display', serif" }};
```

## 📱 Mobile Experience

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly filter sidebar
- Optimized search experience
- Swipeable category chips
- Responsive recipe grids

## 🔍 SEO & Performance

### Built-in Optimizations
- **Core Web Vitals** optimized
- **Image lazy loading** with intersection observer
- **Critical CSS** inlined in `<head>`
- **Font preloading** for custom fonts
- **Gzip-friendly** asset organization

### Structured Data
JSON-LD Recipe schema automatically generated:
```json
{
  "@type": "Recipe",
  "name": "Recipe Title",
  "description": "Recipe description",
  "recipeIngredient": [...],
  "recipeInstructions": [...],
  "nutrition": {...}
}
```

## 🖨️ Print Stylesheet

Optimized print styles for recipe printing:
- **Clean layout** without navigation
- **Single column** design
- **Large readable text** (12pt base)
- **Two-column ingredients** list
- **Page break** controls for steps

Activate with: `{{ theme_settings.recipe_display.enable_print_view }}`

## 🔧 Development

### File Structure
```
the-spicy-spoon/
├── assets/
│   ├── css/theme.css         # Main styles
│   ├── js/theme.js           # Core JavaScript
│   ├── images/placeholders/   # SVG placeholders
│   └── icons/pepper.svg      # Favicon
├── partials/
│   ├── head-meta.html        # SEO & meta tags
│   ├── site-header.html      # Navigation
│   └── site-footer.html      # Footer with newsletter
├── templates/
│   ├── home.html            # Homepage
│   ├── recipes.html         # Recipe listing
│   └── recipe-detail.html   # Individual recipe
├── theme.json               # Theme configuration
├── fields.json              # Theme settings
└── README.md               # This file
```

### Local Development
1. Clone the theme files
2. Install HubSpot CLI: `npm install -g @hubspot/cli`
3. Authenticate: `hs auth --personal-access-key`
4. Upload changes: `hs upload the-spicy-spoon`

## 🎯 Next Steps

### Content Recommendations
1. **Create Recipe Collections**: Group recipes by heat level, cuisine, or cooking time
2. **Add Author Profiles**: Feature recipe creators with photos and bios
3. **Build Email Newsletter**: Use the footer signup form with HubSpot forms
4. **Recipe Reviews**: Enable comments and rating systems
5. **Video Integration**: Add cooking videos to recipe pages

### Advanced Features
- **Recipe Calculator**: Adjust serving sizes dynamically
- **Shopping Lists**: Generate ingredient lists
- **Meal Planning**: Weekly menu builders
- **Social Sharing**: Recipe sharing with custom images
- **User Accounts**: Save favorites and personal notes

---

## 🌶️ Support & Updates

**Theme Version**: 1.0.0  
**HubSpot Compatibility**: CMS Hub Starter, Professional, Enterprise  
**Last Updated**: {{ local_dt|datetimeformat('%B %Y') }}

For support and customization requests, refer to the HubSpot CMS documentation or contact your development team.

**Turn up the heat with The Spicy Spoon! 🔥**