const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('1. If dna string is blank return an array empty array ==> Return([])', () => {
      const dna_string = ''
      const expectedOutput = []
      const actualOutput = dnaPairs(dna_string)
      expect(actualOutput).toEqual(expectedOutput)
  })
  test('2. If (whole) dna string not valid return an empty array. Eg, dna ==> `QW` ==> Return([])', ()=> {
      const invalid_dna_string = 'QW'
      const expectedOutput = []
      const actualOutput = dnaPairs(invalid_dna_string)
      expect(actualOutput).toEqual(expectedOutput)
  })
  test('3. If (part) dna string not valid return an empty array. Eg, dna_string ==> `GW` ==> Return([])', () => {
      const invalid_dna_string = 'GW'
      const expectedOutput = []
      const actualOutput = dnaPairs(invalid_dna_string)
      expect(actualOutput).toEqual(expectedOutput)
  })
  test('4. Return an array with a nested array with a string (DNA) ==> Return([[`D`]])', () => {
    const dna_string = 'G'
    const expectedOutput = [['G']]
    const actualOutput = dnaPairs(dna_string)
    expect(actualOutput[0][0]).toEqual(expectedOutput[0][0])
  });
  test('5. Return an Array with a nested array with a string matched with its base pair', () => {
    const dna_string = 'G'
    const expectedOutput = [['G','C']]
    const actualOutput = dnaPairs(dna_string)
    expect(actualOutput).toEqual(expectedOutput)
  })

  test('6. Return an array with multiple nested arrays each with a DNA and matching pair. Eg, [["G","C], .. ["A", "T"]]', () => {
    const dna_string = 'GT'
    const expectedOutput = [['G','C'],['T','A']]
    const actualOutput = dnaPairs(dna_string)
    expect(actualOutput).toEqual(expectedOutput)
  });
});
// TO DO LIST:
// 
// 1. If dna string is blank return an array empty array ==> Return([])
// 2. If (whole) dna string not valid return an empty array. Eg, dna_string ==> 'QW' ==> Return([]) 
// 3. If (part) dna string not valid return an empty array. Eg, dna_string ==> 'GW' ==> Return([])
// 4. If dna string is valid Return an array with a nested array with a string (DNA) ==> Return([['D']])
// 5. If dna string is validReturn an Array with a nested array with a string matched with its base pair 
// 6. If dna string is validReturn an array with multiple nested arrays with a string (DNA). Eg, 'DD' (length:2) ==> Return([['D'],['D']])
//
// TO DO TO DO LIST:
// Further testing can be completed for lower and uppercase DNA pairs