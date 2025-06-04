# ASIMOV.Directory

A modern, responsive web application for discovering and exploring modules from the ASIMOV ecosystem. Built with SvelteKit and Tailwind CSS, it provides an intuitive interface to browse GitHub repositories from the `asimov-modules` organization.

<img width="1277" alt="Знімок екрана 2025-06-04 о 20 07 33" src="https://github.com/user-attachments/assets/db163479-2b4b-4c1c-b086-cd56509a097e" />


## 🚀 Features

- **Real-time GitHub Integration**: Fetches live data from the `asimov-modules` GitHub organization
- **Smart Sorting**: Multiple sorting options including relevance, popularity, newest, and recently updated
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Module Cards**: Display stars, contributors, languages, topics, and last update
- **Loading States**: Smooth skeleton loading animations
- **Rate Limit Handling**: Supports both authenticated and unauthenticated GitHub API access
- **Custom Theme**: Beautiful design using custom color palette

## 🛠 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Phosphor Svelte](https://github.com/phosphor-icons/phosphor-svelte)
- **API**: GitHub REST API
- **TypeScript**: Full type safety
- **Deployment**: Node.js adapter ready

## 📋 Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm, pnpm, or yarn
- GitHub Personal Access Token (optional but recommended)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/asimov.directory.git
   cd asimov.directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your GitHub token:
   ```env
   VITE_GITHUB_TOKEN=your_github_personal_access_token_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔑 GitHub Token Setup

To avoid rate limits and access private repositories, create a GitHub Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Select scopes:
   - `public_repo` (read public repositories)
   - `read:org` (read organization data)
4. Copy the token and add it to your `.env` file

**Rate Limits:**
- Without token: 60 requests/hour
- With token: 5,000 requests/hour

## 🎨 Customization

### Color Theme

The project uses a custom color palette defined in `src/app.css`:

```css
@theme {
  --color-gGray-100: #f6f6f6;
  --color-sSlate-800: #04163c;
  --color-oOrange-500: #f37021;
  /* ... more colors */
}
```

### Sorting Options

Four sorting methods are available:

- **Most Relevant**: Custom algorithm combining stars, activity, description, and topics
- **Most Popular**: Sorted by GitHub stars
- **Newest**: Recently created repositories
- **Recently Updated**: Latest activity

### Excluded Repositories

Configure which repositories to exclude in `src/lib/github.ts`:

```typescript
const EXCLUDED_REPOS = ['.github', 'docs', 'template'];
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

The project is configured with `@sveltejs/adapter-node` and can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repository
- **Docker**: Use the generated `build` directory
- **VPS**: Run `node build` after building

### Environment Variables for Production

Set these environment variables in your deployment platform:

```env
VITE_GITHUB_TOKEN=your_production_github_token
```

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run Svelte type checking
npm run lint         # Run ESLint and Prettier
npm run format       # Format code with Prettier
```

### Code Quality

- **TypeScript**: Full type safety with strict mode
- **ESLint**: Code linting with Svelte support
- **Prettier**: Code formatting with Svelte and Tailwind plugins

## 📊 API Rate Limits

The application monitors GitHub API rate limits:

- Displays remaining requests in console
- Graceful fallback for missing data
- Handles rate limit exceeded errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🔗 Links

- **Live Demo**: [asimov.directory](https://asimov.directory)
- **ASIMOV Modules**: [github.com/asimov-modules](https://github.com/asimov-modules)
- **Issues**: [Report bugs or request features](https://github.com/your-username/asimov.directory/issues)

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/your-username/asimov.directory/issues) page
2. Create a new issue with details about your problem
3. Contact the ASIMOV.systems team

---
