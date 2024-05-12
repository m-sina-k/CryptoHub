# CryptoHub

An online cryptocurrency exchange market that enables you to check prices, compare and trade cryptocurrencies.

### Getting Started

Here is the [link](https://crypto-hub-landing.vercel.app/) of the project,
deployed on Vercel. However, if you want to run the project locally, you must install `node.js` on your system, clone
the repository and provide `CoinRankApi` credentials.

> Note that in order to connect to Vercel, or CoinRankApi, vpn connection is required.

### Built With
- TurboRepo - a high-performance build system for JavaScript that supports monorepo architecture.
- Next.js - a React.js library which is seo-friendly and has server-rendering features.
- Node.js - a JavaScript runtime which can run JavaScript on the server.

### Features
The project is built using the monorepo architecture (TurboRepo and pnpm workspaces), which has 3 apps and 3 packages.

##### apps:
- landing: landing and marketing page for the market app.
- market: the app that virtualizes the cryptocurrencies info by using charts and table.
- telegram bot: a telegram bot developed with node.js to fetch the latest cryptocurrency prices.

##### packages:
- typescript-config
- eslint-config
- ui: the theme and design system used across all the apps, created using ShadcnUi and tailwindcss.

### Authors
[Sina Kazemi](https://www.linkedin.com/in/m-sina-k/)
