# Personal Resume Website

A modern, responsive personal resume website built with React, TypeScript, and Tailwind CSS.

## Features

- ✅ Fully responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Type-safe with TypeScript
- ✅ Client-side routing with React Router
- ✅ Smooth animations and transitions
- ✅ SEO-friendly
- ✅ Easy to customize

## Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Package Manager:** npm

## Project Structure

```
resume-website/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── types/            # TypeScript interfaces
│   │   └── index.ts
│   ├── data/             # Resume data
│   │   └── resumeData.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Your Information

1. **Personal Info:** Edit `src/data/resumeData.ts` to update your personal information, contact details, and bio.

2. **Experience:** Add or modify your work experience in the `experiences` array.

3. **Projects:** Update the `projects` array with your own projects.

4. **Skills:** Customize the `skills` array with your technical skills.

5. **Education:** Update the `education` array with your educational background.

### Styling

- **Colors:** Modify the color scheme in `tailwind.config.js`
- **Fonts:** Update font families in `tailwind.config.js` or `index.css`
- **Layout:** Adjust spacing and layouts in component files

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the navigation in `src/components/Header.tsx`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and configure settings

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.ts`:
   ```ts
   base: '/your-repo-name/'
   ```
4. Run: `npm run deploy`

## Features to Add (Optional)

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Testimonials
- [ ] Download resume functionality
- [ ] Contact form backend integration
- [ ] Analytics (Google Analytics, Plausible)
- [ ] PWA support
- [ ] Multi-language support

## Performance Optimization

- Images are lazy-loaded
- Code splitting with React Router
- Minified CSS and JS in production
- Optimized build with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own resume website!

## Contact

For questions or suggestions, please reach out via the contact form on the website.

---

Built with ❤️ using React and TypeScript
