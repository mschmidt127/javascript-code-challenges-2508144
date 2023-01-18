function redistributeWealth(wealth) {
  var sum = wealth.reduce((prev, curr) => prev + curr)
  var avg = wealth.length ? sum / wealth.length : 0
  return Array(wealth.length).fill(avg)
}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.deepEqual(redistributeWealth([3, 3, 3, 3]), [3, 3, 3, 3]);
    assert.deepEqual(redistributeWealth([1, 2, 3, 4]), [2.5, 2.5, 2.5, 2.5]);
    assert.deepEqual(redistributeWealth([1, 1, 5, 4, 9]), [4, 4, 4, 4, 4]);
    assert.deepEqual(redistributeWealth([3, 4, 5, 3, 7, 2, 3, 12, 15]), [6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });
});
