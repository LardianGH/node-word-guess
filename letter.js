var letter = function(letter, position,guessed) {
    this.guessed = guessed
    this.letter = letter
    this.position = position
    this.cover = "-",
    this.location = function(){
        //checks if character in current position is letter or a hyphen
    }
    this.replace = function(){
        if (this.guessed === true) {
            console.log(this.letter)
        }
        else {
            console.log(this.cover)
        }
    }
    
    this.replace()
}

module.exports = letter;