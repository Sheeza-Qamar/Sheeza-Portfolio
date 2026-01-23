# 🚀 Modern Portfolio Website


## ✨ Features

### 🎨 Design & UI/UX
- **Modern & Clean Design** - Beautiful, professional interface that stands out
- **Fully Responsive** - Perfect experience on desktop, tablet, and mobile devices
- **Dark Mode Support** - Seamless theme switching with persistent preference
- **Smooth Animations** - Powered by Framer Motion for fluid, engaging interactions
- **Particle Effects** - Interactive background particles using TSParticles
- **Custom Animations** - Animated text, hover effects, and scroll animations

### 🛠️ Functionality
- **Project Showcase** - Beautiful grid layout for featured projects with live demos
- **Skills Section** - Interactive skills display with icons
- **Experience Timeline** - Professional experience timeline with detailed descriptions
- **Education Section** - Academic background with timeline visualization
- **Contact CTA** - Call-to-action section for easy contact
- **Social Links** - Integrated social media links (GitHub, LinkedIn)

### ⚡ Performance
- **Next.js 14** - Built with the latest Next.js features for optimal performance
- **TypeScript** - Full type safety for better development experience
- **Optimized Images** - Next.js Image optimization for fast loading
- **SEO Friendly** - Proper meta tags and semantic HTML

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14.2](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://react.dev/)** - UI library
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework

### Animation & Effects
- **[Framer Motion 10.18](https://www.framer.com/motion/)** - Production-ready motion library
- **[TSParticles](https://particles.js.org/)** - Lightweight particles library
- **[React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)** - Timeline component

### Icons & Assets
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icon library
- **Custom SVGs** - Hand-crafted SVG graphics

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 📦 What's Included

This portfolio template includes the following sections and components:

### 🏠 Home Page Sections
- **Hero/CTA Section** - Eye-catching introduction with animated statistics
- **About Section** - Personal introduction with animated counters
- **Skills Section** - Interactive skills showcase with icons
- **Experience Section** - Professional work experience with interactive timeline
- **Education Section** - Academic background timeline
- **Projects Section** - Featured projects with images, descriptions, and tech stacks

### 🧩 Components
- **AnimatedText** - Text animation component
- **NavBar** - Responsive navigation with mobile menu
- **Footer** - Site footer with social links
- **ParticleContainer** - Animated particle background
- **Logo** - Custom logo component
- **Layout** - Reusable layout wrapper

### 🎨 Styling
- **Dark Mode** - Complete dark/light theme support
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - Smooth transitions and effects
- **Tailwind Configuration** - Custom theme configuration

---



## 🎨 Customization Guide

### 1. Update Personal Information

Edit `src/config/constants.tsx` to update:

- **Projects**: Modify `FEATURED_PROJECTS` array
- **Skills**: Update `SKILLS` array with your skills
- **Experience**: Edit `EXPERIENCE_DATA` array
- **Education**: Modify `EDUCATION_DATA` array
- **Social Links**: Update `SOCIAL_LINKS` array

### 2. Update Images

Replace images in `public/images/`:
- `public/images/profile/` - Profile pictures
- `public/images/projects/` - Project screenshots
- `public/images/skills/` - Skill icons

### 3. Customize Colors & Theme

Edit `tailwind.config.ts` to customize:
- Color scheme
- Font families
- Spacing and sizing

### 4. Update Meta Information

Edit `src/app/layout.tsx` to update:
- Site title
- Meta description
- Open Graph tags

### 5. Modify Navigation

Update `NAV_LINKS` in `src/config/constants.tsx` to change navigation items.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure settings
4. Click Deploy



## 📁 Project Structure

```
JunaidPortfolio/
├── public/
│   ├── images/          # Images (profile, projects, skills)
│   └── svgs/            # SVG assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── home/        # Home page components
│   │   ├── ui/          # UI components (NavBar, Footer, Layout)
│   │   └── ...          # Other components
│   ├── config/          # Configuration files
│   │   ├── constants.tsx # Data constants
│   │   └── types.ts     # TypeScript types
│   └── hooks/           # Custom React hooks
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies
```


