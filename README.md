# multiple-page-app

## Develop

```
yarn start
```

## Build app

```
yarn build
```

## add page

Modify webpack.common.js and specify the new screen file in entry and plugins.

```js
  entry: {
    ...
    newPage: "./src/pages/new-page.js",
  },
  plugins: [
    ...
    new HtmlWebpackPlugin({
      title: "new page",
      inject: true,
      chunks: ["newPage"],
      template: "public/index.html",
      filename: "new-page.html",
    }),

```
