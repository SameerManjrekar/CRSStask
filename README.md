# React TypeScript Vite

This is a sample application to test my react skills by Costa Rica Software Services company
The app is bootstrapped using Vite React TypeScript  [Vite](https://vitejs.dev/)).

---

# \[Your application name\]

Sample Application to display data in a Table based on JSONPlaceholder Todos Endpoint
## Technologies used

- [React](https://reactjs.org/) single page application
- Routing done using [React Router Dom v6]((https://reacttraining.com/react-router/web/guides/philosophy)
- Styling using TailwindCSS [TailwindCSS](https://tailwindcss.com/)
- Tanstack Table [TanstackTable](https://tanstack.com/table/v8)

## Setup

1. Clone the repository and install the dependencies
npm install
2. Start the frontend application locally
npm run dev (http://localhost:5173/)


## Available commands

* `npm run dev`: Start the app locally in your development environment, by default it will be in http://localhost:5173.

## CSS preprocessor

This project uses [TailwindCSS](http://sass-lang.com/) and using PostCSS which means when creating a production build only the CSS classes will be included which are used in this project .

## Linter

In order to lint the code, the project uses [ESLint](https://eslint.org/), which is provided by [Vite](https://vitejs.dev/guide/).

If you want to run the linter just type:
npm lint

It's also convenient to integrate the linter warnings into your code editor, there are many plugins available for ESLint depending on your text editor used.

## Routes

This project is using [`react-router-dom v6`](https://reactrouter.com/en/main)

There are only 2 routes to navigate to different pages of the app, Landing Page and the Todos page:

## State management

No state management used as this is just a GET request from endpoint to display data

## Deployment

\[describe your deployment strategy\]

This app was bootstrapped based on the template provided by [`VITE`](https://vitejs.dev/guide/)
