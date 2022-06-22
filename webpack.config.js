const path = require("path");

module.exports = {
	entry: {
		index: "./src/index.js",
		worklet: "./src/worklet.js",
	},
	mode: process.env.WEBPACK_MODE || "production",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist"),
	},
};
