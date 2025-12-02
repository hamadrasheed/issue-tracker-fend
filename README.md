
# Issue Tracker

Application that will help you out to maintain issues being logged.



# Issue Tracker frontend



# Table of contents:

- [Pre-reqs](#pre-reqs)
- [Getting started](#getting-started)
- [Tracker Frontend]()
	- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
	- [`dependencies`](#dependencies-1)
	- [`devDependencies`](#devdependencies)

# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)(VERSION 22.14.0)
- Install [NPM](https://www.npmjs.com/package/npm)(VERSION 10.9.2)

- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/hamadrasheed/issue-tracker-fend
```
- Install dependencies
```
cd issue-tracker-fend
npm install
```
- Configure env file
```bash
# create a new file name it as '.env.local'
# go to sample.env file
# copy all keys from sample.env to .env file
# update the .env.local with your current local setting

- Run the project
```
npm run dev


Finally, navigate to `http://localhost:3000` and you should see the frontend is running.

# Issue Tracker 


### Running the scripts
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.

Below is a list of all the scripts this template has available:


| NPM Script | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| `dev`      | Runs the Vite development server.                                             |
| `build`    | Builds the project for production using Vite.                                 |
| `preview`  | Previews the production build locally.                                        |
| `lint`     | Runs ESLint on all `.ts` and `.tsx` files to check for code style and errors. |





# Dependencies
Dependencies are managed through `package.json`.
In that file you'll find two sections:

| Package              | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| @hookform/resolvers  | Provides schema-based validation resolvers for `react-hook-form`.           |
| @tailwindcss/vite    | Official Tailwind CSS plugin for Vite to enable utility-first styling.      |
| @vitejs/plugin-react | Vite plugin for React fast refresh and JSX support.                         |
| axios                | Promise-based HTTP client for the browser and Node.js.                      |
| react                | JavaScript library for building user interfaces.                            |
| react-dom            | Entry point for React to interact with the DOM.                             |
| react-hook-form      | Performant, flexible, and extensible form library for React.                |
| react-router-dom     | Declarative routing library for React applications.                         |
| zod                  | TypeScript-first schema validation library for parsing and validating data. |



## `devDependencies`

| Package                 | Description                                                                   |
| ----------------------- | ----------------------------------------------------------------------------- |
| @tailwindcss/line-clamp | Tailwind CSS plugin for truncating text with line clamping utilities.         |
| @tailwindcss/postcss    | Tailwind CSS plugin to integrate with PostCSS for processing styles.          |
| @types/react            | TypeScript type definitions for React.                                        |
| @types/react-dom        | TypeScript type definitions for React DOM.                                    |
| @types/react-router-dom | TypeScript type definitions for React Router DOM.                             |
| autoprefixer            | PostCSS plugin to parse CSS and add vendor prefixes automatically.            |
| eslint                  | Linter for JavaScript and TypeScript to enforce code quality and consistency. |
| postcss                 | Tool for transforming CSS with JavaScript plugins.                            |
| tailwindcss             | Utility-first CSS framework for rapidly building custom user interfaces.      |
| typescript              | TypeScript language compiler.                                                 |
| vite                    | Frontend build tool for development, fast bundling, and serving modules.      |

To install or update these dependencies you can use `npm install` or `npm update`.


# Improvements:
```
If i have more time, i could have setup to run it using docker file.
Implemented search by 'title' and 'status' at backend, would have integrated
it at frontend.
Would have implemented pagination on main listing.
```