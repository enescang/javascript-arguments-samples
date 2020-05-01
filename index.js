function firstExample() {
  document.getElementById("first").innerHTML = arguments.length;
}

function secondExample() {
  for (var i = 0; i < arguments.length; i++) {
    var node = document.createElement("p"); 
    var textnode = document.createTextNode(arguments[i]); 
    node.appendChild(textnode);
    document.getElementById("second").appendChild(node);
  }
}

function convertToArray(){
    var arr = Array.from(arguments);
    // or use below line
    var arr = [...arguments];
}

/**
 * In arrow function there is no arguments concept
 * but there is an other way to get all parameters
 * inside the function
 */
arrowFunction =(...arg)=>{
    console.log(arg);
}