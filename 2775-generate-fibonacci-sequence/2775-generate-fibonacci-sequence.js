/**
 * @return {Generator<number>}
 */
var res = 0;

var fibGenerator = function*() {
  let prev = 0;
  let current = 1;

  yield prev;
  yield current;

  while (true) {
    const next = prev + current;
    yield next;
    prev = current;
    current = next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */