function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: 'Max' };
const objB = { age: 30 };

const mergedObj = merge(objA, objB);
console.log(mergedObj);
