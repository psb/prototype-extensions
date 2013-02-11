describe("Object", function() {
  var obj;

  beforeEach(function() {
    obj = new Object();
  });

  it("should return the key of a key-value pair", function() {
    obj.color = "red";
    obj.shirt = "red";
    obj.shoes = "Nike";
    expect(obj.lookup("red")).toEqual(["color", "shirt"]);
  });
});

describe("Array", function() {
  var ary;

  beforeEach(function() {
    ary = new Array(1,2,3,4,5);
  });

  it("should [randmonly] shuffle the elements of an array", function() {
    expect(ary.shuffle()).toNotEqual([1,2,3,4,5]);
  });

});

describe("Function", function() {
  it("should print (console.log) the input parameters twice", function() {
    var fn = function(){console.log("Hey")};
    var fn2 = function(a, b){console.log("a is " + a + " and b is " + b)};
    fn.runTwice();
    fn2.runTwice();
    expect(fn.callCount).toEqual(2);
    expect(fn2.callCount).toEqual(2);
  });

});