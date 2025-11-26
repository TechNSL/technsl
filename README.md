# TechNSL

TechNSL is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

Install [Node.js](https://nodejs.org/en/download/)

Verify Installation

```bash
node -v
```

```bash
npm -v
```

## Create Docusaurus Site

JavaScript
```bash
npx create-docusaurus@latest technsl classic --javascript
```

TypeScript
```bash
npx create-docusaurus@latest technsl classic --typescript
```

## Start the development server

Navigate to the site directory

```bash
cd technsl
```

Starts the development server.

```bash
npm run start
```

Or

```bash
npx docusaurus start
```

## Build

Bundles your website into static files for production.

```bash
npm run build
```

Serves the built website locally.

```bash
npm run serve
```    

Publishes the website to GitHub pages.

```bash
npm run deploy
```

## Install

Re-install if `.docusaurus` or `node_modules` are not available in the project

```bash
npm install
```

## Add the site to the GitHub repo

Quick setup:
	
Clone https://github.com/TechNSL/technsl.git to local


1) create a new repository on the command line
- echo "# technsl" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/TechNSL/technsl.git
- git push -u origin main

&nbsp;&nbsp;

2) push an existing repository from the command line
- git remote add origin https://github.com/TechNSL/technsl.git
- git branch -M main
- git push -u origin main
