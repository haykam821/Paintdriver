class Vec2 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	map(other, mapper) {
		const x = mapper(this.x, other.x);
		const y = mapper(this.y, other.y);

		return new Vec2(x, y);
	}

	min(other) {
		return this.map(other, Math.min);
	}

	max(other) {
		return this.map(other, Math.max);
	}

	subtract(other) {
		return this.map(other, (a, b) => b - a);
	}

	static random(size, random) {
		const x = random.float() * size.width;
		const y = random.float() * size.height;

		return new Vec2(x, y);
	}
}
module.exports = Vec2;
