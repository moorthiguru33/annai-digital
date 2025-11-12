# Annai Digital Signage Website - UPDATED VERSION

Modern, feature-rich website with **service photos**, **unlimited gallery**, **unlimited clients**, and **perfect mobile responsiveness**.

## 🆕 What's New in This Version

### 1. Service Cards with Photos
- Each service now displays a background photo
- Hover effects reveal icons and gradients
- 12 service photos required

### 2. Unlimited Gallery with View More
- Shows 9 photos initially (was 8)
- "View More" button to reveal additional photos
- Organized by categories in subfolders
- Supports unlimited photos

### 3. Unlimited Clients with View More
- Shows 10 client logos initially (was 8)
- "View More" button to reveal additional logos
- Supports unlimited client logos

### 4. Perfect Mobile Responsiveness
- Optimized for 360px to 1920px+ screens
- 5 responsive breakpoints
- Touch-friendly interactions
- Mobile-first design approach

## 📂 NEW Folder Structure (IMPORTANT!)

```
annai-digital-signage/
├── index.html
├── netlify.toml
├── _redirects
├── .gitignore
├── package.json
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    │
    ├── about-company.jpg          (Your workshop/office photo)
    ├── md-photo.jpg                (Managing Director photo)
    │
    ├── services/                   🆕 NEW FOLDER
    │   ├── trimcap-led.jpg        (Trimcap LED letters photo)
    │   ├── trimless-led.jpg       (Trimless LED letters photo)
    │   ├── liquid-led.jpg         (Liquid LED letters photo)
    │   ├── brass-letters.jpg      (Brass/SS letters photo)
    │   ├── led-display.jpg        (LED display wall photo)
    │   ├── routing-board.jpg      (LED routing board photo)
    │   ├── medical-board.jpg      (Medical board photo)
    │   ├── uv-backlight.jpg       (UV backlight board photo)
    │   ├── acrylic-printing.jpg   (Acrylic printing photo)
    │   ├── laser-cutting.jpg      (Laser cutting photo)
    │   ├── cnc-routing.jpg        (CNC routing photo)
    │   └── custom-solutions.jpg   (Custom solutions photo)
    │
    ├── gallery/                    🆕 ORGANIZED BY CATEGORY
    │   ├── led/                   (LED projects folder)
    │   │   ├── led-project-1.jpg
    │   │   ├── led-project-2.jpg
    │   │   ├── led-project-3.jpg
    │   │   ├── led-project-4.jpg  (Hidden - shows on View More)
    │   │   └── ... (add more as needed)
    │   │
    │   ├── brass/                 (Brass/SS projects folder)
    │   │   ├── brass-project-1.jpg
    │   │   ├── brass-project-2.jpg
    │   │   ├── brass-project-3.jpg
    │   │   ├── brass-project-4.jpg (Hidden - shows on View More)
    │   │   └── ... (add more as needed)
    │   │
    │   ├── display/               (Display projects folder)
    │   │   ├── display-project-1.jpg
    │   │   ├── display-project-2.jpg
    │   │   └── ... (add more as needed)
    │   │
    │   └── boards/                (Board projects folder)
    │       ├── board-project-1.jpg
    │       ├── board-project-2.jpg (Hidden - shows on View More)
    │       └── ... (add more as needed)
    │
    └── clients/                    🆕 SUPPORTS UNLIMITED
        ├── client-1.png           (First 10 visible)
        ├── client-2.png
        ├── client-3.png
        ├── client-4.png
        ├── client-5.png
        ├── client-6.png
        ├── client-7.png
        ├── client-8.png
        ├── client-9.png
        ├── client-10.png
        ├── client-11.png          (Hidden - shows on View More)
        ├── client-12.png          (Hidden - shows on View More)
        ├── client-13.png
        ├── client-14.png
        ├── client-15.png
        ├── client-16.png
        └── ... (add unlimited more)
```

## 📸 Image Requirements

### Service Photos (12 required)
**Location:** `images/services/`

Each service needs a high-quality photo:

1. **trimcap-led.jpg** - Photo of Trimcap LED letters installation
2. **trimless-led.jpg** - Photo of Trimless LED letters
3. **liquid-led.jpg** - Photo of Liquid LED letters
4. **brass-letters.jpg** - Photo of Brass or SS letters
5. **led-display.jpg** - Photo of LED display wall
6. **routing-board.jpg** - Photo of LED routing board
7. **medical-board.jpg** - Photo of medical/hospital board
8. **uv-backlight.jpg** - Photo of UV backlight board
9. **acrylic-printing.jpg** - Photo of acrylic printing work
10. **laser-cutting.jpg** - Photo of laser cutting work
11. **cnc-routing.jpg** - Photo of CNC routing work
12. **custom-solutions.jpg** - Photo of custom signage work

**Specifications:**
- Size: 800x600px minimum
- Format: JPG
- Quality: High (80-90%)
- Max size: 500KB per image
- These will be background images with overlay effects

### Gallery Photos (Unlimited, minimum 9)
**Location:** `images/gallery/[category]/`

Organized by category folders:

**LED Projects** (`images/gallery/led/`):
- Minimum 3 photos initially visible
- Add more with numbered names: led-project-1.jpg, led-project-2.jpg, etc.

**Brass Projects** (`images/gallery/brass/`):
- Minimum 3 photos initially visible
- brass-project-1.jpg, brass-project-2.jpg, etc.

**Display Projects** (`images/gallery/display/`):
- Minimum 2 photos initially visible
- display-project-1.jpg, display-project-2.jpg, etc.

**Board Projects** (`images/gallery/boards/`):
- Minimum 1 photo initially visible
- board-project-1.jpg, board-project-2.jpg, etc.

**Specifications:**
- Size: 1200x800px
- Format: JPG
- Quality: Good (75-85%)
- Max size: 400KB per image
- Compress before upload (tinypng.com)

### Client Logos (Unlimited, minimum 10)
**Location:** `images/clients/`

- First 10 logos visible initially: client-1.png to client-10.png
- Additional logos shown on "View More": client-11.png onwards
- Add as many as you want!

**Specifications:**
- Format: PNG with transparent background
- Width: 400px maximum
- Maintain aspect ratio
- Max size: 100KB per logo
- Professional quality

### Other Required Images

**About Company Photo** (`images/about-company.jpg`):
- Your workshop, office, or team photo
- Size: 800x600px minimum
- Format: JPG
- Max size: 500KB

**MD Photo** (`images/md-photo.jpg`):
- Managing Director's professional photo
- Size: 600x600px minimum (square recommended)
- Format: JPG
- Max size: 300KB

## 🚀 Deployment Steps

### Step 1: Create Folders
Create the exact folder structure shown above, especially:
- `images/services/` folder (NEW!)
- `images/gallery/led/` folder
- `images/gallery/brass/` folder
- `images/gallery/display/` folder
- `images/gallery/boards/` folder
- `images/clients/` folder

### Step 2: Add Your Photos

1. **Service Photos (12 required):**
   - Add all 12 service photos to `images/services/` folder
   - Name them EXACTLY as specified above

2. **Gallery Photos (minimum 9, unlimited max):**
   - Sort your project photos by category
   - Place LED project photos in `images/gallery/led/`
   - Place Brass project photos in `images/gallery/brass/`
   - Place Display photos in `images/gallery/display/`
   - Place Board photos in `images/gallery/boards/`
   - Name them: category-project-1.jpg, category-project-2.jpg, etc.

3. **Client Logos (minimum 10, unlimited max):**
   - Add logos to `images/clients/` folder
   - Name them: client-1.png, client-2.png, etc.
   - First 10 show automatically, rest need "View More"

4. **Other Photos:**
   - Add about-company.jpg and md-photo.jpg

### Step 3: Deploy to Netlify

**Option A: Drag & Drop (Easiest)**
1. Go to: https://app.netlify.com/drop
2. Drag your entire `annai-digital-signage` folder
3. Site goes LIVE instantly!

**Option B: GitHub + Netlify**
```bash
git init
git add .
git commit -m "Annai Digital Signage - Updated Version"
git push to GitHub
# Then connect in Netlify dashboard
```

## ✨ New Features Explained

### 1. Service Cards with Photos
- Each service displays a relevant photo as background
- Hover reveals icon with gradient overlay
- More engaging and professional look
- Mobile-optimized with touch support

### 2. Gallery View More
- **Initial display:** 9 photos (3 LED, 3 Brass, 2 Display, 1 Board)
- **Click "View More":** Shows all hidden photos
- **Click "View Less":** Hides extra photos and scrolls back up
- **Filter integration:** Works seamlessly with category filters
- **Add unlimited photos:** Just add to HTML and they'll work!

### 3. Clients View More
- **Initial display:** 10 client logos
- **Click "View More":** Shows all hidden logos with stagger animation
- **Click "View Less":** Hides extra logos and scrolls back up
- **Add unlimited logos:** Keep adding client-##.png files

### 4. Perfect Mobile View
Optimized for ALL screen sizes:
- **Desktop:** 1920px+ (Full layout)
- **Laptop:** 1200px-1920px (Standard view)
- **Tablet:** 768px-1200px (Adjusted columns)
- **Mobile:** 480px-768px (Single column, optimized)
- **Small Mobile:** 360px-480px (Compact, touch-friendly)
- **Extra Small:** Below 360px (Minimal design)

Mobile features:
- ✅ Hamburger navigation menu
- ✅ Touch-friendly buttons (larger targets)
- ✅ Single column layouts
- ✅ Optimized image sizes
- ✅ Faster loading on mobile networks
- ✅ Swipe-friendly gallery
- ✅ Readable text sizes
- ✅ Easy-to-tap WhatsApp button

## 🎨 How to Add More Photos

### Adding More Gallery Photos:

1. **Choose the category folder:**
   - LED → `images/gallery/led/`
   - Brass → `images/gallery/brass/`
   - Display → `images/gallery/display/`
   - Boards → `images/gallery/boards/`

2. **Name your photo:**
   - Example: `led-project-5.jpg`

3. **Add to HTML (index.html):**
   Find the gallery section and add:
   ```html
   <div class="gallery-item gallery-hidden" data-category="led">
       <img src="images/gallery/led/led-project-5.jpg" alt="LED Project 5">
       <div class="gallery-overlay">
           <h4>Your Project Title</h4>
           <p>Your Project Description</p>
       </div>
   </div>
   ```

4. **Key points:**
   - Add `gallery-hidden` class to hide initially
   - Match `data-category` to folder name
   - Use descriptive title and description

### Adding More Client Logos:

1. **Add logo to folder:**
   - Place in `images/clients/`
   - Name it: `client-17.png` (next number)

2. **Add to HTML:**
   ```html
   <div class="client-logo client-hidden">
       <img src="images/clients/client-17.png" alt="Client 17">
   </div>
   ```

3. **Key point:**
   - Add `client-hidden` class for logos after #10

## 📱 Testing Checklist

After deployment, test these:

### Desktop Testing
- [ ] All service photos load and display
- [ ] Service hover effects work
- [ ] Gallery shows 9 initial photos
- [ ] Gallery "View More" reveals hidden photos
- [ ] Gallery filters work correctly
- [ ] Clients shows 10 initial logos
- [ ] Clients "View More" reveals hidden logos
- [ ] Lightbox opens on gallery click
- [ ] All navigation links work

### Mobile Testing (CRITICAL)
- [ ] Site loads fast on mobile
- [ ] Hamburger menu opens/closes
- [ ] All text is readable
- [ ] Buttons are easy to tap
- [ ] Service cards display properly
- [ ] Gallery photos are visible
- [ ] Gallery "View More" works
- [ ] Clients logos display in grid
- [ ] Clients "View More" works
- [ ] Contact form is usable
- [ ] WhatsApp button is accessible
- [ ] Map displays correctly
- [ ] Footer is readable

### Cross-Device Testing
- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad/Tablet
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Safari

## 🆘 Common Issues & Solutions

### Service photos not showing?
- Check images are in `images/services/` folder
- Check filenames match EXACTLY (case-sensitive!)
- Example: `trimcap-led.jpg` NOT `Trimcap-Led.jpg`

### Gallery photos not showing?
- Check images are in correct category subfolder
- Example: LED photos → `images/gallery/led/`
- Check image names in HTML match file names

### View More not working?
- Check `gallery-hidden` class is added to hidden items
- Check `client-hidden` class is added to clients 11+
- Check JavaScript file is loaded: `js/script.js`

### Mobile view issues?
- Clear browser cache
- Test in incognito/private mode
- Check viewport meta tag is present
- Test with actual mobile device

## 💡 Pro Tips

1. **Optimize images first:**
   - Use https://tinypng.com before uploading
   - Reduces loading time significantly
   - Improves mobile experience

2. **Consistent naming:**
   - Use lowercase for all filenames
   - Use hyphens, not spaces
   - Be consistent: led-project-1.jpg, not LEDProject1.jpg

3. **High-quality photos:**
   - Use professional photos if possible
   - Good lighting and composition
   - Shows your work at its best

4. **Regular updates:**
   - Add new projects to gallery regularly
   - Add new clients as you get them
   - Keep content fresh and current

5. **Test on real devices:**
   - Don't just resize browser
   - Test on actual phones and tablets
   - Check loading speed on mobile data

## 📞 Support

**Annai Digital Signage**
- Phone: +91 98848 85789
- WhatsApp: +91 98848 85789
- Address: 4, Grand Northern Trunk Rd, Madhavaram, Chennai

## 📄 Version

**Version:** 2.0 - Updated with Service Photos, Unlimited Gallery & Clients, Perfect Mobile View
**Last Updated:** November 2025

© 2025 Annai Digital Signage. All Rights Reserved.
