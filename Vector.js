class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    if (z === undefined) {
      this.z = 0;
    } else {
      this.z = z;
    }
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  div(s) {
    this.x /= s;
    this.y /= s;
    this.z /= s;
    return this;
  }

  mult(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  getMag() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  normalize() {
    var mag = this.getMag();
    this.x /= mag;
    this.y /= mag;
    this.z /= mag;
    return this;
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    if (z === undefined) {
      this.z = 0;
    } else {
      this.z = z;
    }
    return this
  }

  static dist(v1, v2) {
    var v1copy = new Vector(v1.x, v1.y, v1.z);
    var v2copy = new Vector(v2.x, v2.y, v2.z);
    return v1copy.sub(v2copy).getMag();
  }
}
