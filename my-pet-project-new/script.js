const testArr = [1, [1, 2, [3, 4]], [2, 4]];

const resArr = [];

// const flattenArray = function (value) {
//   for (let i = 0; i < value.length; i++)
//     Array.isArray(value[i]) ? flattenArray(value[i]) : resArr.push(value[i]);
//   return resArr;
// };

const flattenArray = (value) => {
  const resArr = [];
  value.map((el) =>
    Array.isArray(el) ? resArr.push(...flattenArray(el)) : resArr.push(el)
  );

  return resArr;
};
console.log(flattenArray(testArr));
