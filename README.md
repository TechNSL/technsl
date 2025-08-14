# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Install [Node.js](https://nodejs.org/en/download/) and create a new Docusaurus site:

JavaScript
```bash
npx create-docusaurus@latest technsl classic --javascript
```

TypeScript
```bash
npx create-docusaurus@latest technsl classic --typescript
```
Start the site:

```bash
cd technsl
npx docusaurus start

-- or
npm start
```

Open [`http://localhost:3000`](http://localhost:3000) and follow the tutorial.


## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
