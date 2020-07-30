Kata = {
  getVolumeOfCuboid: function (length, width, height) {
    return length * width * height;
  },
};

// Alternate
class Kata {
  static getVolumeOfCuboid(l, w, h) {
    return l * w * h;
  }
}
// Alternate
const Kata = {
  getVolumeOfCuboid: (length, width, height) => length * width * height,
};
// Alternate

var Kata = (() => {
  this.getVolumeOfCuboid = (l, w, h) => l * w * h;
  return this;
})();
