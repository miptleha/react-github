## GitHub Search App

Simplified version of GitHub [Search](https://github.com/search/advanced)

![app.png](app.png)

## How to run

[Generate](https://github.com/settings/tokens/new) GitHub token and add it to [global.js](global.js)

Install dependencies and run the project:
```
npm ci
npm start
```

>[!WARNING]
>The build will fail with an error if there is no token

Test production build:
```
npm run build:prod
serve
```

[![hits](https://myhits.vercel.app/api/hit/https%3A%2F%2Fgithub.com%2Fmiptleha%2Freact-github?color=blue&label=hits&size=small)](https://myhits.vercel.app)
