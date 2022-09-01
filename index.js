// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat){
    return cats.push(cat)
}

function destructivelyPrependCat(cat){
    return cats.unshift(cat)
}

function destructivelyRemoveLastCat(cat){
    return cats.pop(cat)
}

function destructivelyRemoveFirstCat(cat){
    return cats.shift()
}

function appendCat(cat){
    let  newArray = [...cats];
    newArray.push(cat)
    return newArray
  }


  function prependCat(cat){
    let newArray = [...cats];
    newArray.unshift(cat)
    return newArray
  }

  function removeLastCat(cat){
    let newArray = [...cats];
    newArray.pop(cat)
    return newArray
  }


  function removeFirstCat(cat){
    let newArray = [...cats];
    newArray.shift(cat)
    return newArray 
  }
