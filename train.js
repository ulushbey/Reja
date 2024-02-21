//MIT Task F

function findDoublers(str) {
  const x = str.split('');

  return x.some((value, index) => x.indexOf(value) !== index);
}


console.log(findDoublers("hello")); 
console.log(findDoublers("ulugbek"));
console.log(findDoublers("mehrojj"));
