
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  return [].concat(...matrix.map((e, i) => i % 2 ? e.reverse() : e));
}
