// Add your functions and code here
function destructivelyAppendKitten(name){
  //var kittens = ["Milo", "Otis", "Garfield"];
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift(name);
}

function appendKitten(name){
  newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  newArray = [name, ...kittens];
  return newArray;
}

