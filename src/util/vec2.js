class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	resolve(other, resolver) {
		const x = resolver(this.x, other.x);
		const y = resolver(this.y, other.y);

		return new Vec2(x, y);
	}

	min(other) {
		return this.resolve(other, Math.min);
	}

	max(other) {
		return this.resolve(other, Math.max);
	}

	subtract(other) {
		return this.resolve(other, (a, b) => b - a);
	}

	static random(size, random) {
		const x = random.float() * size.width;
		const y = random.float() * size.height;

		return new Vec2(x, y);
	}
}
module.exports = Vec2;
