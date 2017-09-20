var myModuleTwo = {

  myProperty: "blue",

  myConfig: {
    version: 1,
    author: "Mike"
  },

  showAuthor: function() {
    console.log("Author is " + this.myConfig.author);
  },

  setAuthor: function() {
    this.myConfig.author = "John";
  }
}