require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");
require("file-loader?name=[name].[ext]!./index.css");

CSS.registerProperty({
	inherits: true,
	initialValue: 0,
	name: "--seed",
	syntax: "<integer>",
});

CSS.paintWorklet.addModule("worklet.js");
