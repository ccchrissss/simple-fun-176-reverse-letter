function reverseLetter(str) {
  
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let reversedStrJustLetters = []

  str = str.split('').reverse().join('')

  for (let i = 0; i < str.length; i++) {
    
    if ( alphabet.includes(str.charAt(i)) ) { reversedStrJustLetters.push(str.charAt(i))}
    
  }

  return reversedStrJustLetters.join('')
}

console.log(reverseLetter('wolf-moon49!!'))

// parameters: str
// return: str     // reversed and with non-alphabetic characters removed
// e.g. reverseLetter('wolf-moon49!!')
// results in 'noomflow'

// declare a variable alphabet and assign it to an array of lowercase letters a-z
// declare a variable reversedStrJustLetters and assign to an empty array
// split the str, reverse it, join it into an array
// loop through the str ... i = 0; i < str.length; i++
  // if alphabet includes str.charAt(i) then push str.charAt(i) to reversedStrJustLetters
// end loop
// return reversedStrJustLetters turned into a string