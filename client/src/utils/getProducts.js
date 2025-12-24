export const getMinimumProducts = (products, skinType) => {
  const list = products[skinType] || [];
  let result = [];

  while (result.length < 3) {
    result.push(list[result.length % list.length]);
  }

  return result.slice(0, 3);
};
