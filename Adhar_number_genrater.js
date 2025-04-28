// Verhoeff algorithm tables
const d_table = [
    [0,1,2,3,4,5,6,7,8,9],
    [1,2,3,4,0,6,7,8,9,5],
    [2,3,4,0,1,7,8,9,5,6],
    [3,4,0,1,2,8,9,5,6,7],
    [4,0,1,2,3,9,5,6,7,8],
    [5,9,8,7,6,0,4,3,2,1],
    [6,5,9,8,7,1,0,4,3,2],
    [7,6,5,9,8,2,1,0,4,3],
    [8,7,6,5,9,3,2,1,0,4],
    [9,8,7,6,5,4,3,2,1,0]
  ];
  
  const p_table = [
    [0,1,2,3,4,5,6,7,8,9],
    [1,5,7,6,2,8,3,0,9,4],
    [5,8,0,3,7,9,6,1,4,2],
    [8,9,1,6,0,4,3,5,2,7],
    [9,4,5,3,1,2,6,8,7,0],
    [4,2,8,6,5,7,3,9,0,1],
    [2,7,9,3,8,0,6,4,1,5],
    [7,0,4,6,9,1,3,2,5,8]
  ];
  
  const inv_table = [0,4,3,2,1,5,6,7,8,9];
  
  // Generate the Verhoeff checksum digit
  function generateVerhoeffDigit(number) {
    let c = 0;
    const numReversed = number.split('').reverse().map(Number);
    
    for (let i = 0; i < numReversed.length; i++) {
      const num = numReversed[i];
      c = d_table[c][p_table[(i + 1) % 8][num]];
    }
    
    return inv_table[c];
  }
  
  // Generate a valid Aadhaar number
  function generateValidAadhaar() {
    let first11Digits = '';
    for (let i = 0; i < 11; i++) {
      first11Digits += Math.floor(Math.random() * 10);
    }
    const checksumDigit = generateVerhoeffDigit(first11Digits);
    const aadhaarNumber = first11Digits + checksumDigit.toString();
    return aadhaarNumber;
  }
  
  // === MAIN CODE ===
  const validAadhaar = generateValidAadhaar();
  console.log("Generated valid Aadhaar number:", validAadhaar);
  