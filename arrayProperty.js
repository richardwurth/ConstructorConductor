//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

  //code here

  String.prototype.reverse = function() {
    var result = '';
    for (var i = this.length-1; i >= 0; i--) {
      result += this[i];
    }
    return result;
  }

  var test = "This is a big long string!";
  var whatever = "Psssh whatever";

  console.log(test.reverse());
