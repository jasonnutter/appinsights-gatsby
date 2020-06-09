# appinsights-gatsby

Demonstrates server-side rendering errors in Gatsby when using `@microsoft/applicationinsights-web`.

1. `npm install`
1. Open `src/pages/index.jsx` and provide `instrumentationKey`.
1. `npm start`: This should succeed, as there is no server-side rendering.
1. `npm run build`: This will fail with error: `WebpackError: ReferenceError: XMLHttpRequest is not defined`
