/**
 * 値を下限と上限の間に制限
 * @param {number} value - 値
 * @param {number} min - 下限
 * @param {number} max - 上限
 * @returns {number} - 制限値
 */
const clamp = (value, min, max) => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

export { clamp };
