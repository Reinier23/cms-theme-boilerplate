# 🌶️ The Spicy Spoon – Professional HubSpot CMS Theme

A modern, responsive HubSpot CMS theme designed for spicy food blogs and recipe websites. Inspired by leading recipe platforms like Allrecipes, BBC Good Food, and Serious Eats.

**✅ FULLY EDITABLE DRAG-AND-DROP TEMPLATES** - Professional recipe site with complete module system!

## ✨ Features

### 🎨 **Professional Design**
- Modern, clean design inspired by top recipe websites
- Responsive grid system with mobile-first approach
- Beautiful typography scale with Google Fonts integration
- Comprehensive color palette with theme customization
- Professional placeholder images and SVG icons

### 🔧 **Drag & Drop Functionality**
- **Hero Banner** with search, stats, and floating animations
- **Recipe Grid** with cards, ratings, and heat levels
- **Collection Strip** for featured recipe collections
- **Tip Cards** for cooking knowledge and advice
- **Newsletter Signup** with enhanced form validation
- **Filter Bar** for advanced recipe filtering

### 🏗️ **Theme Architecture**
- **Comprehensive CSS Framework** - Professional component library
- **Enhanced Partials** - Modular header, footer, and meta components
- **Dynamic Theme Settings** - 60+ customization options
- **Performance Optimized** - Lazy loading, critical CSS, optimized fonts
- **Accessibility First** - WCAG AA compliant with focus states and screen reader support

### 📱 **User Experience**
- **Advanced Search** with suggestions and auto-complete
- **Smart Filtering** by cuisine, heat level, time, difficulty
- **Recipe Cards** with ratings, timing, and heat indicators
- **Collection System** for organizing recipes by themes
- **Newsletter Integration** with real-time validation
- **Print Stylesheet** for recipe printing

## 🚀 Quick Start

### 1. Upload Theme to HubSpot
```bash
hs upload the-spicy-spoon the-spicy-spoon --account your-account
```

### 2. Create Your First Page
1. Go to **Marketing → Website → Website Pages**
2. Click **Create → Website Page**
3. Select **"The Spicy Spoon"** theme
4. Choose **"Home - Spicy Recipes (Drag & Drop)"** template
5. **✨ Now you can add, remove, and edit modules!**

### 3. Customize Your Content
1. **Add Modules**: Click the **"+"** button in any drag-and-drop area
2. **Edit Modules**: Click any module to customize text, images, and settings
3. **Rearrange**: Drag modules up/down to reorder your page
4. **Theme Settings**: Use the sidebar to adjust global colors and typography

### 4. Configure Theme Settings
1. In the page editor, click **"Theme Settings"** in the sidebar
2. Customize your brand colors under **"Brand Palette"**
3. Adjust typography in **"Typography Scale"** section
4. Configure spacing and layout in **"Design Tokens"**
5. Set recipe display preferences in **"Recipe Display Options"**

## 🔧 Template System

### ✅ **Drag & Drop Templates** (Fully Editable)
These templates use HubSpot's `{% dnd_area %}` system for complete flexibility:

#### 🏠 **`home.html`** - "Home - Spicy Recipes (Drag & Drop)"
**Available Modules:**
- **Hero Banner** - Title, subtitle, search bar, stats, floating animations
- **Collection Strip** - Featured recipe collections with badges
- **Recipe Grid** - Popular recipes showcase with ratings
- **Tip Cards** - Spice knowledge and cooking tips
- **Newsletter Signup** - Email capture with validation

**Features:**
- ✅ Add/remove modules
- ✅ Drag & drop reordering  
- ✅ Individual module editing
- ✅ Marketer-friendly
- ✅ Hero search with suggestions
- ✅ Floating visual elements
- ✅ Stats display

#### 📝 **`recipes-listing.html`** - "Recipes Listing (Drag & Drop)"
**Available Modules:**
- **Page Header** - Compact hero with search functionality
- **Filter Bar** - Sidebar filters for categories, cuisine, heat level
- **Recipe Grid** - Searchable, sortable recipe results
- **Collection Strip** - Related collections

**Features:**
- ✅ Advanced filtering system
- ✅ Sort controls (relevance, rating, time, heat)
- ✅ Active filter chips with "Clear all"
- ✅ Responsive filter sidebar
- ✅ Client-side filtering (HubDB ready)

### 🔧 **Developer Templates** (For Reference)
- **`recipe-detail.html`** - Individual recipe pages with JSON-LD
- **`collections.html`** - Recipe collections overview
- **`search.html`** - Search results page
- **`404.html`** - Custom error page

## 🎨 **Theme Customization**

### Brand Palette
```css
--color-primary: #B71C1C     /* Main brand color */
--color-accent: #FF6D00      /* Secondary highlights */
--color-success: #2E7D32     /* Positive actions */
--color-warning: #F57C00     /* Heat indicators */
--color-neutral-900: #212121 /* Primary text */
--color-neutral-600: #757575 /* Secondary text */
--color-neutral-400: #9E9E9E /* Placeholder text */
--color-neutral-200: #E0E0E0 /* Borders */
--color-neutral-100: #F5F5F5 /* Light backgrounds */
```

### Typography Scale
- **Heading Font**: 'Playfair Display', Georgia, serif
- **Body Font**: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- **Scale Ratio**: 1.25 (Major Third)
- **Base Size**: 16px
- **Line Height**: 1.6

### Design Tokens
- **Border Radius**: 8px (customizable)
- **Card Aspect Ratio**: 4/3 (configurable: 1:1, 4:3, 3:4, 16:9)
- **Button Style**: Rounded (options: rounded, pill, square, minimal)
- **Shadow Strength**: Medium (subtle, medium, strong)

## 🎯 **Module Library**

### 🏆 **Core Modules** (9 Modules Available)

#### 🎯 **Hero Banner**
- **Purpose**: Page headers with search functionality
- **Fields**: Title, subtitle, search placeholder, stats, background image
- **Features**: Floating animations, search suggestions, statistics display
- **Use Cases**: Homepage hero, page headers

#### 🍽️ **Recipe Grid** 
- **Purpose**: Display recipe cards in grid layout
- **Fields**: Section title/subtitle, recipes array, view all button
- **Features**: Responsive grid, star ratings, heat levels, badges
- **Use Cases**: Featured recipes, recipe listings, search results

#### 📚 **Collection Strip**
- **Purpose**: Showcase recipe collections
- **Fields**: Collections array with images, titles, descriptions, badges
- **Features**: Hover effects, recipe counts, heat level indicators
- **Use Cases**: Featured collections, related content, category browsing

#### 💡 **Tip Card**
- **Purpose**: Spice knowledge and cooking tips
- **Fields**: Tips array with icons, titles, descriptions, links
- **Features**: Icon display, hover effects, call-to-action links
- **Use Cases**: Educational content, cooking advice, spice guides

#### 📧 **Newsletter Signup**
- **Purpose**: Email capture with styling options
- **Fields**: Title, subtitle, form action, privacy text, button text
- **Features**: Enhanced validation, loading states, success feedback
- **Use Cases**: Newsletter subscription, email capture, CTA sections

#### 🔍 **Filter Bar**
- **Purpose**: Advanced filtering for recipe listings
- **Fields**: Multiple filter types, categories, cuisines, options
- **Features**: Collapsible groups, active filters, clear all functionality
- **Use Cases**: Recipe filtering, search refinement, category browsing

#### 🌡️ **Spice Meter**
- **Purpose**: Heat level indicators
- **Fields**: Heat level (1-5), custom text, visual style
- **Features**: Visual heat indicators, custom styling
- **Use Cases**: Recipe heat levels, spice ratings

#### 🥘 **Recipe Card**
- **Purpose**: Individual recipe display
- **Fields**: Image, title, description, rating, time, difficulty, tags
- **Features**: Hover effects, badges, meta information
- **Use Cases**: Recipe showcases, search results, recommendations

#### 🌿 **Ingredient Spotlight**
- **Purpose**: Highlight featured ingredients
- **Fields**: Ingredient name, image, description, benefits
- **Features**: Visual highlighting, educational content
- **Use Cases**: Ingredient education, featured content

### 📝 **Module Customization**
- **Images**: Replace placeholder SVGs with food photography
- **Text**: Edit titles, descriptions, and button text directly
- **Colors**: Most modules respect global theme settings
- **Layout**: Adjust grid columns, spacing, and alignment options
- **Behavior**: Configure hover effects, animations, and interactions

## 🖼️ **Asset Library**

### Placeholder Images
- **`hero.jpg`** - 1200×630 hero background
- **`card-1.svg`** - Spicy recipe placeholder
- **`card-2.svg`** - Fresh/green recipe placeholder  
- **`card-3.svg`** - Comfort food placeholder
- **`card-4.svg`** - Seafood recipe placeholder
- **`avatar.svg`** - Chef/author profile placeholder
- **`logo.svg`** - Professional brand logo

### Icons & Graphics
- **`pepper.svg`** - Spice indicator and favicon
- **Inline SVGs** - Search, time, rating, navigation icons
- **Heat Indicators** - 🌶️ visual system (1-5 levels)
- **Badges** - "New", "Popular", "Featured" overlays

## 🚀 **Performance & SEO**

### Performance Features
- **Lazy Loading** - Images load as they come into view
- **Critical CSS** - Inline critical styles for faster rendering
- **Font Optimization** - Google Fonts with preload and fallbacks
- **Image Optimization** - Width/height attributes to prevent CLS
- **Skeleton Loaders** - Loading states for better perceived performance

### SEO Optimization
- **JSON-LD** - Recipe structured data for rich snippets
- **Meta Tags** - Comprehensive Open Graph and Twitter Cards
- **Canonical URLs** - Proper URL canonicalization
- **WebSite Schema** - Search functionality markup
- **Breadcrumbs** - Navigation schema markup

### Accessibility
- **WCAG AA Compliant** - Meets accessibility standards
- **Focus States** - Visible focus indicators for keyboard navigation
- **ARIA Labels** - Screen reader support
- **Color Contrast** - Meets minimum contrast requirements
- **Reduced Motion** - Respects user motion preferences
- **Semantic HTML** - Proper heading hierarchy and landmarks

## 📱 **Responsive Design**

### Breakpoints
- **Mobile**: 768px and below
- **Tablet**: 769px - 1024px  
- **Desktop**: 1025px and above

### Mobile Features
- **Collapsible Navigation** - Hamburger menu with smooth animations
- **Touch-Friendly** - Large tap targets and spacing
- **Mobile Search** - Optimized search experience
- **Filter Sidebar** - Full-screen mobile filters
- **Sticky Actions** - Fixed action bar on mobile

## 🖨️ **Print Stylesheet**

### Print Features
- **Recipe-Optimized** - Clean, readable recipe printing
- **Single Column** - Simplified layout for printing
- **Essential Content** - Hides navigation and non-essential elements
- **Readable Typography** - Optimized font sizes and spacing
- **Page Breaks** - Proper content flow across pages

## 📊 **Analytics & Tracking**

### Built-in Events
- **Newsletter Signup** - Form submission tracking
- **Recipe Views** - Page view analytics
- **Search Usage** - Search term tracking
- **Filter Usage** - Filter interaction analytics
- **Social Sharing** - Share button tracking

## 🔧 **Development Features**

### CSS Architecture
- **Design System** - Comprehensive component library
- **CSS Variables** - Dynamic theming system
- **Utility Classes** - Flexible layout utilities
- **Component Styles** - Modular, reusable components
- **Responsive Utilities** - Mobile-first responsive design

### JavaScript Features
- **Progressive Enhancement** - Works without JavaScript
- **Client-Side Filtering** - Fast recipe filtering
- **Form Validation** - Enhanced form experiences
- **Smooth Animations** - Performance-optimized animations
- **Accessibility** - Keyboard navigation and screen reader support

### HubSpot Integration
- **Theme Settings** - 60+ customization options
- **Module System** - Professional drag-and-drop modules
- **HubL Integration** - Dynamic content and personalization
- **Form Integration** - HubSpot form compatibility
- **Analytics Ready** - HubSpot tracking integration

## 📁 **File Structure**

```
the-spicy-spoon/
├── assets/
│   ├── css/
│   │   ├── theme.css           # Main CSS framework
│   │   └── base.css            # Legacy base styles
│   ├── js/
│   │   ├── theme.js            # Global JavaScript
│   │   └── filtering.js        # Recipe filtering
│   ├── images/
│   │   └── placeholders/       # Professional placeholder images
│   ├── icons/
│   │   └── pepper.svg          # Favicon and brand icon
│   └── logos/
│       └── spicy-spoon-logo.svg
├── partials/
│   ├── head-meta.html          # SEO meta and CSS variables
│   ├── site-header.html        # Professional navigation
│   └── site-footer.html        # Newsletter and links
├── templates/
│   ├── home.html               # Homepage (Drag & Drop)
│   ├── recipes-listing.html    # Recipe listing (Drag & Drop)
│   ├── recipe-detail.html      # Individual recipe page
│   ├── collections.html        # Recipe collections
│   ├── search.html             # Search results
│   └── 404.html                # Error page
├── modules/                    # 9 professional modules
│   ├── hero_banner/
│   ├── recipe_grid/
│   ├── collection_strip/
│   ├── tip_card/
│   ├── newsletter_signup/
│   ├── filter_bar/
│   ├── spice_meter/
│   ├── recipe_card/
│   └── ingredient_spotlight/
├── theme.json                  # Theme configuration
├── fields.json                 # Theme settings (60+ options)
└── README.md                   # This documentation
```

## 🚨 **Troubleshooting**

### Template Issues
**✅ "Template doesn't allow modules to be added"**
- **Solution**: Use the drag-and-drop versions with "(Drag & Drop)" in the name
- **Templates**: "Home - Spicy Recipes (Drag & Drop)", "Recipes Listing (Drag & Drop)"

### Module Issues
**Module not appearing in editor**
1. Check the module exists in `modules/` folder
2. Verify `meta.json` has correct category: `"Spicy Spoon – Core"`
3. Upload the module folder: `hs upload the-spicy-spoon/modules`

### Theme Settings Issues
**Theme settings not working**
1. Ensure `fields.json` has valid syntax
2. Check all field `type` properties are defined
3. Upload theme: `hs upload the-spicy-spoon/fields.json`

### Performance Issues
**Slow loading times**
1. Ensure lazy loading is enabled in theme settings
2. Optimize images before uploading
3. Check network requests in browser dev tools

### Mobile Issues
**Layout broken on mobile**
1. Clear browser cache
2. Check responsive CSS is loading
3. Test in actual mobile device, not just browser simulation

## 🎯 **Next Steps**

### Content Recommendations
1. **Recipe Photography** - Replace placeholders with high-quality food photos
2. **Content Strategy** - Develop recipe categorization and tagging system
3. **SEO Optimization** - Implement recipe schema markup for rich snippets
4. **Social Integration** - Add Instagram feed and social sharing
5. **Performance Monitoring** - Set up Core Web Vitals tracking

### Advanced Features (Phase 2)
1. **HubDB Integration** - Connect recipes to HubSpot database
2. **User Accounts** - Recipe favorites and personal collections
3. **Advanced Search** - Ingredient-based and nutritional filtering
4. **Recipe Calculator** - Serving size adjustment and nutritional calculation
5. **Community Features** - Recipe reviews, ratings, and comments

## 🌶️ **Support & Updates**

**Theme Version**: 2.0.0 (Professional Recipe Site)  
**HubSpot Compatibility**: CMS Hub Starter, Professional, Enterprise  
**Last Updated**: {{ local_dt|datetimeformat('%B %Y') }}

### Template Support Status
✅ **Fully Editable (Drag & Drop)**
- Home page - Complete with hero, collections, recipes, tips
- Recipes listing - Advanced filtering and search
- All modules functional and customizable

🔧 **Developer Templates**
- Recipe detail - JSON-LD structured data
- Collections - Recipe organization
- Search results - Advanced search functionality

### Technical Specifications
- **CSS Framework**: 2000+ lines of professional styles
- **JavaScript**: Progressive enhancement with accessibility
- **Modules**: 9 professional, editor-friendly modules
- **Templates**: 2 drag-and-drop + 4 developer templates
- **Theme Settings**: 60+ customization options
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG AA compliant
- **SEO**: Rich snippets and structured data ready

For support and customization requests, refer to the HubSpot CMS documentation or contact your development team.

**Turn up the heat with The Spicy Spoon! 🔥**