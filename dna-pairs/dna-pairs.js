 /*
  Create a function that takes a string of DNA 
  and matches each base with its pair, returning a nested array. 
  In DNA, C pairs with G and T pairs with A.

  Examples
  Here are some examples below.

  dnaPair("G");
  // should return [ ["G", "C"] ]
  dnaPair("AG");
  // should return [ ["A", "T"], ["G", "C"] ]
  dnaPair("ATAG");
  // should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
*/
function dnaPairs(dna) {
    const dnaLookup = {
      'C':'G',
      'T':'A',
      'A':'T',
      'G':'C'
    }
    let dna_sequence = [], 
        dna_string = ''  
    for (let count = 0; count < dna.length; count++){
      dna_string = dna[count]
      if (dna_string in dnaLookup){
        dna_sequence.push([dna_string, dnaLookup[dna_string]])
      } else {
        // If any part of dna_string is not valid return an empty array
        return [] 
      }
    }
    return dna_sequence
}

module.exports = dnaPairs;
