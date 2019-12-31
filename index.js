
function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  });
}

function iterate(callback) {
  var x = ['kertu', 'kert', 'ker'];
  x.forEach(callback);
  return x;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
