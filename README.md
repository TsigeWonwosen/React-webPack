# "React JS - Without Create-react-app"


---

### Webpack and Babel configuration

```javascript

const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
   resolve: {
    extensions: ['.js', '.jsx'], // Specify the file extensions to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      favicon: path.join(__dirname,"/src/favicon.ico"),
    }),
    new CleanWebpackPlugin(),
  ],
};



```

### Startup script for webpack

```json

"scripts": {
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
  }

```

🚀 Follow Me:

- [Github](https://github.com/TsigeWonwosen)
- [Linkedin](https://www.linkedin.com/in/wondwosen-shiferaw-tsige-84531992/)
- [Portfolio](https://wondeshi.netlify.app/)