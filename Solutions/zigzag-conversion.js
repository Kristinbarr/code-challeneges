/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (s.length === 1 || numRows === 1) return s   // edge cases for loop can't handle
  const rows = Array(numRows).fill('')            // create array with numRows number of strings in it, maybe another function 
  let str = s                                     // copy string so we can manipulate it
  
  for (let j = 0; j < s.length; j++) {            // outer loop over string 
      
      for (let i = 0; i < rows.length-1; i++) {   // for loop deal out an incrementing letter to each row
          if (str.length === 0) break             // if str has no more letters, break
          rows[i] += str[0]                       // add letter to each row
          str = str.slice(1)                      // remove letter from front of string
      }
      
      for (let i = rows.length-1; i > 0; i--) {   // reverse loop of deal out
          if (str.length === 0) break             // if str has no more letters, break
          rows[i] += str[0]                       // add letter to each row
          str = str.slice(1)                      // remove letter from front of string
      }
      if (str.length === 0) break                 // break out of outer loop if str has no more chars
  }
  return rows.join('')                            // once done, combine strings into one string
};


// P-A-H-N
// APLSIIG
// Y-I-R

// PAHN
// APLSIIG
// YIR


// P--I--N
// A-LS-IG
// YA-HR
// P--I

// PIN
// ALSIG
// YAHR
// PI


// P---H
// A--SI
// Y-I-R
// PL--I-G
// A---N

// PH
// ASI
// YIR
// PLIG
// AN
