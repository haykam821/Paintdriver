const Box = require("./util/box.js");
const { XORShift64 } = require("random-seedable");

const SEED_PROPERTY = "--seed";

class WebdriverPaint {
	/**
	 * @param {CanvasRenderingContext2D} context
	 */
	paint(context, size, properties) {
		const seed = properties.get(SEED_PROPERTY);
		const random = new XORShift64(Math.floor(seed.value));

		const blue = Box.random(size, random);
		context.fillStyle = "blue";
		blue.render(context);

		const red = Box.random(size, random);
		context.fillStyle = "red";
		red.render(context);
	}

	static get inputProperties() {
		return [
			SEED_PROPERTY,
		];
	}
}

registerPaint("webdriver", WebdriverPaint);
