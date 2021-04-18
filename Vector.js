class Vector {
  constructor(x, y, z) {
    this.is3D = false;
    this.x = x;
    this.y = y;
    if (z !== undefined) {
      this.is3D = true;
      this.z = z;
    }
  }

  add(v) {
    if (this.is3D != v.is3D) {
      console.log("Vectors must have the same dimensions");
    }
    this.x += v.x;
    this.y += v.y;
    if (this.is3D) {
      this.z += v.z;
    }
    return this;
  }

  sub(v) {
    if (this.is3D != v.is3D) {
      console.log("Vectors must have the same dimensions");
    }
    this.x -= v.x;
    this.y -= v.y;
    if (this.is3D) {
      this.z -= v.z;
    }
    return this;
  }

  div(s) {
    this.x /= s;
    this.y /= s;
    if (this.is3D) {
      this.z /= s;
    }
    return this;
  }

  mult(s) {
    this.x *= s;
    this.y *= s;
    if (this.is3D) {
      this.z *= s;
    }
    return this;
  }

  getMag() {
    if (this.is3D) {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    } else {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }

  normalize() {
    var mag = this.getMag();
    this.x /= mag;
    this.y /= mag;
    if (this.is3D) {
      this.z /= mag;
    }
    return this;
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    if (z !== undefined) {
      this.is3D = true;
      this.z = z;
    }
    return this;
  }

  static dist(v1, v2) {
    if (v1.is3D != v2.is3D) {
      console.log("Vectors must have the same dimensions");
    }
    if (v1.is3D) {
      var v1copy = new Vector(v1.x, v1.y, v1.z);
      var v2copy = new Vector(v2.x, v2.y, v2.z);
    } else {
      var v1copy = new Vector(v1.x, v1.y);
      var v2copy = new Vector(v2.x, v2.y);
    }
    return v1copy.sub(v2copy).getMag();
  }
}
