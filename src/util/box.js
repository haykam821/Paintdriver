const Vec2 = require("./vec2.js");

class Box {
	constructor(a, b) {
		this.start = a.min(b);
		this.end = a.max(b);
	}

	size() {
		return this.start.subtract(this.end);
	}

	render(context) {
		const size = this.size();
		context.fillRect(this.start.x, this.start.y, size.x, size.y);
	}

	static random(size, random) {
		const a = Vec2.random(size, random);
		const b = Vec2.random(size, random);

		return new Box(a, b);
	}
}
module.exports = Box;
