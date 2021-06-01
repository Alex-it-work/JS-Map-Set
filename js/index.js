"use strict";

// Map
// Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.

const arrKeys = ["a", "b", "c", "d", "e", "f", "g"];
const arrValues = ["A", "B", "C", "D", "E", "F", "G"];
const lettersMap = new Map();
for (let i = 0; i < arrKeys.length; i++) {
  lettersMap.set(arrKeys[i], arrValues[i]);
}
// или
// const arrFirst = ["A", "a"];
// const arrSecond = ["B", "b"];
// const lettersMap = new Map([arrFirst,arrSecond]);

// Получите список ключей и значений отдельно.

for (const key of lettersMap.keys()) {
  console.log("key :>> ", key);
}
for (const value of lettersMap.values()) {
  console.log("value :>> ", value);
}

// Получите текущее количество элементов.

console.log("lettersMap.size :>> ", lettersMap.size);

// Добавьте и удалите элемент

lettersMap.set("h", "H");
lettersMap.delete("a");

// Произведите поиск по ключу

lettersMap.get("d");

/***************************************************** */

// Set

// Создайте коллекцию Set с начальными значениями 1,2,3.

const simpleSet = new Set([1, 2, 3]);

// С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.

console.log("simpleSet.has(3) :>> ", simpleSet.has(3));
console.log("simpleSet.has(4) :>> ", simpleSet.has(4));

// Добавите еще несколько элементов.

simpleSet.add(4);
simpleSet.add(5);

// С помощью цикла for-of переберите ее значения и выведите в консоль.

for (const item of simpleSet) {
  console.log("item of simpleSet :>> ", item);
}

// Найдите сумму этих значений.

const sumOfSimpleSet = countSumOfSet(simpleSet);
console.log(sumOfSimpleSet);

function countSumOfSet(set) {
  let capacitor = 0;
  for (const item of set) {
    capacitor += item;
  }
  return capacitor;
}

// Удалите элемент 2.

simpleSet.delete(2);

// Очистите всю коллекцию.

simpleSet.clear();

/***************************************************** */

// MyArray

// * Сделать MyArray итерируемым.

class MyArray {
  constructor() {
    this.length = 0;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  }

  shift() {
    if (this.length === 0) {
      return;
    }
    const fistItem = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[--this.length];
    return fistItem;
  }

  unshift() {
    this.length += arguments.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this[i] = this[i - arguments.length];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this.length;
  }

  filter(callback) {
    const returningArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        returningArray.push(this[i]);
      }
    }
    return returningArray;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    return {
      next: () => {
        if (currentIndex === this.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: this[currentIndex++],
          done: false,
        };
      },
    };
  }
}

const arr = new MyArray();

arr.push(1, 2, 3);

for (const item of arr) {
  console.log("item :>> ", item);
}

for (const keys of arr.keys()) {
  console.log("keys :>> ", keys);
}
