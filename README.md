# Jessynapse Portfolio

A minimal PhD-to-industry portfolio website built with Astro, deployed to GitHub Pages.

## Structure

- **Home** (`src/pages/index.astro`) - Landing page
- **Research & Projects** (`src/pages/research.md`) - Research projects
- **Publications** (`src/pages/publications.md`) - Academic publications
- **Skills** (`src/pages/skills.md`) - Technical and research skills
- **CV Download** (`src/pages/cv.md`) - CV download page
- **Contact** (`src/pages/contact.md`) - Contact information

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Updating Content

### Markdown Pages

All content pages use Markdown files located in `src/pages/`:

- Edit `src/pages/research.md` to update research projects
- Edit `src/pages/publications.md` to update publications
- Edit `src/pages/skills.md` to update skills
- Edit `src/pages/contact.md` to update contact information

### Home Page

Edit `src/pages/index.astro` to update the home page content.

### Navigation

Update the navigation menu in `src/layouts/BaseLayout.astro`.

### CV File

1. Place your CV PDF file in the `public/` directory as `cv.pdf`
2. The download link in `src/pages/cv.md` will automatically work

## Custom Domain Setup

### Option 1: Using GitHub Pages Custom Domain

1. Go to your repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `jessynapse.com`)
3. GitHub will provide DNS records to add:
   - Add a CNAME record pointing to `jessynapse.github.io`
   - Or add A records for GitHub Pages IPs

4. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://jessynapse.com', // Your custom domain
     base: '/', // Change from '/jessynapse' to '/' for custom domain
     // ...
   });
   ```

5. Create `public/CNAME` file with your domain:
   ```
   jessynapse.com
   ```

### Option 2: Using Subdomain

If using a subdomain (e.g., `portfolio.jessynapse.com`):

1. Add CNAME record: `portfolio` → `jessynapse.github.io`
2. Update `astro.config.mjs`:
   ```js
   site: 'https://portfolio.jessynapse.com',
   base: '/',
   ```
3. Create `public/CNAME`:
   ```
   portfolio.jessynapse.com
   ```

## Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

1. Push your changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. GitHub Actions will build and deploy automatically
3. Check the Actions tab in your repository for deployment status

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the built site
3. You can manually upload this to GitHub Pages or any static hosting

## Repository Setup

### Initial Setup

1. Create a new GitHub repository named `jessynapse` (or your preferred name)

2. Update `astro.config.mjs` if using a different repository name:
   ```js
   base: '/your-repo-name',
   ```

3. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/jessynapse.git
   git push -u origin main
   ```

### Enable GitHub Pages

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow in `.github/workflows/deploy.yml` will handle deployment

## Styling

This project uses Tailwind CSS. Customize styles by:

- Editing `tailwind.config.mjs` for theme customization
- Adding custom CSS in layout files
- Using Tailwind utility classes directly in components

## Content Management Tips

### Adding New Pages

1. Create a new `.md` or `.astro` file in `src/pages/`
2. Add a link to the navigation in `src/layouts/BaseLayout.astro`

### Adding Images

1. Place images in `public/images/`
2. Reference them as `/images/your-image.jpg` in Markdown or components

### Markdown Features

All Markdown pages support:
- Headers, lists, links
- Code blocks
- Images
- And all standard Markdown syntax

## Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Check that all file paths are correct
- Verify `astro.config.mjs` settings match your repository setup

### GitHub Pages Not Updating

- Check GitHub Actions workflow status
- Verify `base` path in `astro.config.mjs` matches your repository name
- Clear browser cache or use incognito mode

### Custom Domain Issues

- Verify DNS records are correct (may take 24-48 hours to propagate)
- Ensure `public/CNAME` file exists with your domain
- Check that `site` in `astro.config.mjs` matches your domain

## License

This project is open source and available for personal use.

