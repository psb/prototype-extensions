// add code here
Object.prototype.lookup = function(value){
  var arrayOfKeys = [];

  for (var key in this) {
    if (this[key] === value) {
      arrayOfKeys.push(key);
    }
  }

  return arrayOfKeys;
};

Array.prototype.shuffle = function(){
  var len = this.length, randomElement, lastElement;

  while (len--) {
    randomElement = Math.floor(Math.random() * len); // random array element
    lastElement = this[len]; // last array element
    this[len] = this[randomElement]; // last array element is now random array element
    this[randomElement] = lastElement; // random array element is the last array element
  }

};

Function.prototype.callCount = 0;

Function.prototype.runTwice = function(arguments){
  this.call(this, arguments);
  this.callCount += 1;
  this.call(this, arguments);
  this.callCount += 1;
};