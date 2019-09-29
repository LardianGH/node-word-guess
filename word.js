var Lett = require("./letter.js")
var fs = require('fs')

var Word = function(chosen) {
this.chosen = chosen.split("")

this.setIndex = function() {
    for (i=0; i<this.chosen.length; i++) {   
        index = i
        letters = this.chosen[i]
            this.lettGuessed = function() {
                if (process.argv[2] === letters) {
                    guessed = true
                    letter = new Lett(letters,index,guessed)
                    
                }
                else {
                    guessed = false
                    letter = new Lett(letters,index,guessed)
                    
                }
            }
            this.lettGuessed()
    }}
    this.setIndex()
}

fs.readFile("words.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
    //var dataArr = data.split(",");
    //console.log(dataArr);
    Word(data)
  });