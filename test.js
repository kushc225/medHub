let arr = [1, 2, 4];

const obj = arr.reduce((ac, ele, idx) => {
  return { [idx + 1]: ele, ...ac };
}, {});
console.log(obj);
