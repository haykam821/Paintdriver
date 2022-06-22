module.exports = {
	entry: {
		index: "./src/index.js",
		worklet: "./src/worklet.js",
	},
	mode: process.env.WEBPACK_MODE || "production",
	output: {
		filename: "[id].js",
		path: __dirname + "/dist",
	},
};