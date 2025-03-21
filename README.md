# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment Variables

This project uses environment variables for configuration. To set up your environment:

1. Create a `.env` file in the root directory of the project (already done)
2. Add your environment variables using the `VITE_` prefix for client-side code:

```env
VITE_REPO_NAME=your-repo-name
```

## GitHub Pages and React Router

[react-router-not-working-with-github-pages](https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages)

When deploying a React application with React Router to GitHub Pages, you might encounter routing issues where refreshing pages or directly accessing URLs results in 404 errors. This happens because GitHub Pages doesn't support client-side routing by default.

Don't forget to update the /blog/posts-in-html/ string in fetchPostContentFromFile to match the actual repo name.