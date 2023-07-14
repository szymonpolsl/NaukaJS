const path = require("path")

module.exports = {
    entry: './index.js',
    output:  {
        filename: "wynik.js",
        path: path.resolve(__dirname,"folder")
    },
    mode: 'development'
}