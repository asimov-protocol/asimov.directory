# ASIMOV.Directory

A modern, responsive web application for discovering and exploring modules and data sources from the ASIMOV ecosystem. Built with Astro, React, and TypeScript, it provides an intuitive interface to browse GitHub repositories from the `asimov-modules` organization and explore data sources with their endpoints.

<img width="1277" height="773" alt="Знімок екрана 2025-08-06 о 17 01 00" src="https://github.com/user-attachments/assets/8be09316-6d87-47ca-8b70-15619d3d5f1f" />

## 🚀 Features

- **Dual Interface**: Browse both modules and data sources with dedicated views
- **Real-time GitHub Integration**: Fetches live data from ASIMOV organizations with GitHub stats
- **Mobile-First Design**: Fully responsive with optimized mobile layouts and interactions
- **Data Sources Explorer**: Browse datasets with endpoints and module connections
- **Advanced Search**: Real-time filtering across modules and data sources
- **Query Caching**: Efficient data management with TanStack Query
- **Automated Sitemap**: SEO-optimized with automatic sitemap generation
- **Loading States**: Smooth skeleton loading animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠 Tech Stack

- **Framework**: [Astro 5.12.8](https://astro.build/) - Modern static site generator
- **UI Library**: [React 19.1.1](https://react.dev/) - Component-based UI
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Full type safety
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) - Beautiful icon library
- **State Management**: [TanStack Query](https://tanstack.com/query/) - Data fetching and caching
- **Code Quality**: ESLint 9 + Prettier 3 - Modern linting and formatting
- **Deployment**: Static site generation with SSR support

## 📋 Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm, pnpm, or yarn

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asimov-protocol/asimov.directory.git
   cd asimov.directory
   ```

2. **Install dependencies**

   ```bash
   nvm use # Ensure you are using Node.js v22

   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📊 Data Sources

The application fetches data from multiple sources:

### Modules Data

- **ASIMOV Platform API**: Module metadata, stars, and GitHub information
- **GitHub API**: Live repository data and statistics
- **YAML Manifests**: Module configuration and metadata

## 🎨 Customization

### Color Theme

The project uses a custom color palette defined in `src/styles/global.css`:

```css
@theme {
  --color-gGray-100: #f6f6f6;
  --color-sSlate-800: #04163c;
  --color-oOrange-500: #f37021;
  /* ... more colors */
}
```

### Navigation Structure

Two main sections:

- **Sources** (`/`): Browse data sources with endpoints and formats
- **Modules** (`/modules`): Explore GitHub modules with metadata

### Mobile Optimizations

- **Compact Layouts**: Streamlined mobile interfaces for all components
- **Touch-Friendly**: Optimized tap targets and interactions
- **Responsive Tables**: Mobile-first data source browser
- **Collapsible Sections**: Expandable endpoint details

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### SEO Features

- **Automatic Sitemap**: Generated at build time with all pages
- **Meta Tags**: Proper OpenGraph and Twitter Card support
- **Favicons**: Complete favicon set for all devices

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality Tools

- **TypeScript**: Strict mode with comprehensive type checking
- **ESLint 9**: Modern flat config with Astro, React, and accessibility rules
- **Prettier 3**: Code formatting with plugin support
- **Pre-commit Hooks**: Automated code quality checks

## 📊 Performance & Caching

### Query Caching

- **TanStack Query**: Intelligent data caching with stale-while-revalidate
- **Optimistic Updates**: Smooth user experience with background refetching
- **Error Recovery**: Automatic retry logic for failed requests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode requirements
- Ensure mobile responsiveness for all components
- Add proper accessibility attributes
- Include error handling for API calls
- Test across different screen sizes

## 🔗 Links

- **Live Demo**: [asimov.directory](https://asimov.directory)
- **ASIMOV Modules**: [github.com/asimov-modules](https://github.com/asimov-modules)
- **ASIMOV Platform**: [github.com/asimov-platform](https://github.com/asimov-platform)
- **Issues**: [Report bugs or request features](https://github.com/asimov-protocol/asimov.directory/issues)

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/asimov-protocol/asimov.directory/issues) page
2. Create a new issue with details about your problem
3. Contact the ASIMOV team
