const { linearSearch, globalLinearSearch } = require('../linear-search');

describe("linearSearch()", function () {
  it("returns first index of item in array", function () {
    let item = 3;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
  it("returns first index of item in array with string items", function () {
    let item = 'hi';
    let arr = ['bye', 'hello', 'how a u', 'hi'];
    expect(linearSearch(item, arr)).toEqual(3);
  });
  it("returns -1 if there is no item in array or there is empty array", function () {
    let item = 9;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(-1);
    expect(linearSearch(item, [])).toEqual(-1);
  });
  it("returns true of false after comparing the founded index with test ndex", function () {
    let item = 9;
    let arr = [5, 2, 7, 9, 3];
    expect(linearSearch(item, arr)).toBeGreaterThan(2);
    expect(linearSearch(item, arr)).toBeLessThanOrEqual(4);
    expect(linearSearch(item, arr)).toBeLessThanOrEqual(3);
  });
});

describe("globalLinearSearch()", function () {
  it("returns array indexes of items in array", function () {
    let item = 'a';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
    expect(globalLinearSearch('i', ['h', 'i'])).toEqual([1]);
    expect(globalLinearSearch('i', arr)).toEqual([]);
    expect(globalLinearSearch(item, 'bananas')).toEqual([1, 3, 5]);
    expect(globalLinearSearch(3, [3, 2, 3, 4, 5])).toEqual([0, 2]);
  });
});
