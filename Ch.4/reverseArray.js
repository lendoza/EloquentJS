function reverseArray(array){
  var newArr = [];
  for (var i = 0; i < array.length; i++){
    newArr.unshift(array[i]);
  }
  return newArr;
}

function reverseArrayInPlace(array){
  for(var i = 0; i < Math.floor(array.length / 2); i++){
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array
}

console.log(reverseArray(['1', '2', '3']))
console.log(reverseArrayInPlace(['1', '2', '3']));