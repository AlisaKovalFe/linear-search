//Реализуй функции линейного поиска. Проверь результат тестами.
//принимает два аргумента: объект и массив. Она должна последовательно перебирать каждый элемент и возвращать индекс,
// в котором объект был изначально найден. Если объект не найден, то функция возвращает значение -1.
function linearSearch(n, arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i
    }
  }
  return -1

  //рекурсия, с этим доразобраться
  // let result = []
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(result);
  //   if (Array.isArray(arr[i])) {
  //     linearSearch(n, arr[i])
  //   } else {

  //     result.push(arr[i])
  //     // console.log(result);
  //   }

  // }
  // return result

  //  while
  // let i = 0
  // while (i < arr.length) {
  //   if (arr[i] === n) {
  //     return i
  //   }
  //   i++;
  // }
  // return -1
}

// console.log(linearSearch(3, [1, [2, 3, 4, 5]]));


//напишем новый метод globalLinearSearch, который возвращает массив всех индексов, в которых найден элемент.
function globalLinearSearch(n, arr) {

  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      newArr.push(i)
    }
  }
  return newArr

  //while
  // let newArr = []
  // let i = 0
  // while (i < arr.length) {
  //   if (arr[i] === n) {
  //     newArr.push(i)
  //   }
  //   i++
  // }
  // return newArr

}

// console.log(globalLinearSearch('a', ['b', 'a', 'n', 'a', 'n', 'a', 's']));

module.exports = {
  linearSearch,
  globalLinearSearch
}
