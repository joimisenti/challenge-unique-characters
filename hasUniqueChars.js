/* Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
// returns true
hasUniqueChars("Moonday")
// returns false
Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
// returns true
*/

function hasUniqueChars(word) {
    for(let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
            if(word[i] === word[j]) {
            console.log(false)    
                return false
            }
        }
    }
    console.log(true)
    return true
}

hasUniqueChars('Joi')

// solution
// function hasUniqueChars(word) {
//     let uniqueChars = new Set([])
//     for (let i = 0; i < word.length; i++) {
//       uniqueChars.add(word[i])
//     }
//     return uniqueChars.size === word.length
//   }
