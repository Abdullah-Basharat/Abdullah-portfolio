# Abdullah Basharat - Portfolio

A modern, responsive portfolio website showcasing my work as an AI/ML Engineer. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with purple accents
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Accessibility**: Built with accessibility best practices
- **SEO Ready**: Optimized for search engines
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint
- **Formatting**: Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About page component
│   ├── Contact.tsx     # Contact page component
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Projects.tsx    # Projects page component
│   ├── Resume.tsx      # Resume page component
│   └── ...
├── pages/              # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── Resume.tsx
├── data/               # Static data
│   └── portfolioData.json
├── styles/             # CSS files
│   ├── animations.css
│   └── design-system.css
├── hooks/              # Custom React hooks
└── main.tsx           # Application entry point
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: Dark theme with purple (#8b5cf6) as primary color
- **Typography**: Inter font family with consistent sizing
- **Spacing**: Standardized spacing scale
- **Components**: Reusable card, button, and form components
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdullahbasharat/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean build artifacts
- `npm run analyze` - Analyze bundle size

## 🎯 Key Features

### Pages
- **Home**: Hero section, services, expertise, featured projects
- **About**: Personal information, skills, metrics, certificates
- **Projects**: Portfolio of AI/ML projects with filtering
- **Resume**: Professional experience, education, skills
- **Contact**: Contact form and social links

### Components
- **Responsive Navigation**: Mobile-friendly header with smooth transitions
- **Card System**: Consistent card design across all sections
- **Form Handling**: Contact form with validation and status feedback
- **Animations**: Smooth scroll animations and hover effects
- **Icon Integration**: Dynamic icon system using Lucide React

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Meta tags and structured data

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Abdullah Basharat - Portfolio
VITE_APP_DESCRIPTION=AI/ML Engineer Portfolio
```

### Customization
- **Colors**: Update CSS variables in `src/styles/design-system.css`
- **Content**: Modify `src/data/portfolioData.json`
- **Styling**: Adjust Tailwind classes or add custom CSS

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### GitHub Pages
1. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Abdullah Basharat**
- Email: abdullahbasharat400@gmail.com
- LinkedIn: [abdullahbasharat](https://linkedin.com/in/abdullahbasharat)
- GitHub: [abdullahbasharat](https://github.com/abdullahbasharat)
- Portfolio: [abdullahbasharat.netlify.app](https://abdullahbasharat.netlify.app)

## 🙏 Acknowledgments

- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Vite](https://vitejs.dev/) for fast build tooling
- [React Router](https://reactrouter.com/) for routing

---

⭐ Star this repository if you found it helpful! 