# EverythingAI Foundation Website

A beautiful, responsive landing page for the EverythingAI Foundation built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetics with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessible**: WCAG compliant with proper contrast and semantic HTML
- **SEO Ready**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd everythingai-foundation
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### GitHub Pages Deployment

The site is configured for automatic deployment to GitHub Pages with your custom domain:

1. **Push code to your GitHub repository's `main` branch**
2. **GitHub Actions will automatically build and deploy**
3. **Site will be available at: `https://www.everythingaifoundation.org`**

### Custom Domain Setup

#### Step 1: GitHub Repository Settings
1. **Go to your GitHub repository**
2. **Navigate to Settings → Pages**
3. **Set Source to "GitHub Actions"** (not "Deploy from a branch")
4. **Add custom domain**: `www.everythingaifoundation.org`
5. **Enable "Enforce HTTPS"**

#### Step 2: Domain DNS Configuration
**In your domain provider (Squarespace) settings**:

1. **Add CNAME record**:
   - **Name/Host**: `www`
   - **Value/Points to**: `<your-github-username>.github.io`
   - **TTL**: 3600 (or default)

2. **Add A records for apex domain** (optional, for `everythingaifoundation.org` without www):
   - **Name/Host**: `@` or leave blank
   - **Value/IP Address**: 
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL**: 3600 (or default)

#### Step 3: Verification
1. **Wait 10-15 minutes** for DNS propagation
2. **Check GitHub Pages settings** - should show green checkmark
3. **Visit your site**: `https://www.everythingaifoundation.org`

### Alternative: GitHub Repository Setup

If you prefer the old method:
1. **In your GitHub repository**:
   - Go to Settings → Pages
   - Set source to "GitHub Actions"
   - Add your custom domain: `www.everythingaifoundation.org`


## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/              # Reusable components
├── lib/                     # Utility functions
├── public/                  # Static assets
│   └── CNAME               # Custom domain configuration
└── .github/workflows/       # GitHub Actions
    └── deploy.yml          # Deployment workflow
```

## 🎨 Customization

### Colors
The site uses a comprehensive color system defined in `tailwind.config.ts`. Main colors:
- **Primary**: Blue gradient (#2563eb to #7c3aed)
- **Secondary**: Purple accents
- **Success**: Green highlights
- **Neutral**: Gray scale for text and backgrounds

### Content
Update content in `app/page.tsx`:
- Hero section text and CTAs
- Mission statement
- Program descriptions
- Contact information

### Images
Replace placeholder images with your own:
- Update Pexels URLs in the components
- Add images to `public/` folder for local assets

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact the EverythingAI Foundation team.

---

Built with ❤️ for the EverythingAI Foundation
