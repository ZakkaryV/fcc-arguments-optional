
function addTogether() {
  
  for (var i = 0; i < arguments.length; i++) {
    
    if (typeof arguments[i] !== "number") {
      
      return undefined;
      
    }
    
  }
  
  var arg1 = arguments[0];
  
  if (arguments.length < 2) {
    
    return function secondArg(arg2) {
      
      if (typeof arg2 === "number") {
      
      return arg1 + arg2;
        
      } else {
        
        return undefined;
        
      }
      
    };
    
  }

  return arguments[0] + arguments[1];
  
}

addTogether(2)([3]);
