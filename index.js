var recipes = {};



function updateObjectWithKeyAndValue(object, key, value){
 var copy = Object.assign({}, object);
 copy[key] = recipes;
  return copy;
 
}
  
