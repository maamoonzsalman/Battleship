function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

const exportedObject = { sum, product };
module.exports = exportedObject;
