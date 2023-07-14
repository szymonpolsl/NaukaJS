const sum = (a, b) => {
  return a + b;
};

module.exports = sum;

// common.js eksport
// exportowanie -> przez module.export
// importujemy -> przez require('ścieżka')

// npm - pomaga zarządzać modułami
const suma = (a, b) => {
  return a + b;
};

const multi = (a, b) => {
  return a * b;
};

//ESModules
// exportowanie -> export ...
// importowanie -> import ... from 'ścieżka'

const obj1 = {
  a: 1,
};

const obj2 = {
  a: 1,
};

//console.log(lodash.isEqual(obj1,obj2)) - porównywanie z lodashem
