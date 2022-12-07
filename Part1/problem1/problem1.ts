function simpleEquations(a: number, b: number, c: number) {
  // Your code here
  /*  ------- PERMINTAAN SOAL ------
  - x + y + z = A // tambah
  - xyz = B // kali
  - x^2 + y^2 + z^2 = C // pangkat 2 + pangkat 2 + pangkat 2
  
  */

  // --------------------------- PROSES LOOPING --------------------//
  let max = Math.max(a, b, c),
    output;

  for (let x = 1; x <= max; x++) {
    for (let y = x + 1; y <= max; y++) {
      for (let z = y + 1; y <= max; y++) {
        if (
          x + y + z === a &&
          x * y * z === b &&
          x ** 2 + y ** 2 + z ** 2 === c
        ) {
          output = `${x} ${y} ${z}`;
        }
      }
    }
  }
  return output || "no solution";
}

export default simpleEquations;
