//Simple oblect
// var myObjectLiteral = {
 
//     variableKey: variableValue,
 
//     functionKey: function () {
//       // ...
//     }
// };

var myModuleOne = {

  myProperty: "red",

  myConfig: {
    version: 1,
    author: "Mike"
  },

  showAuthor: function() {
    console.log("Author is " + this.myConfig.author);
  },

  setAuthor: function(author) {
    this.myConfig.author = author;
  }
}