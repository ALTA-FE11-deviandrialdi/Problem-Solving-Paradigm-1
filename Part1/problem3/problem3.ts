function jajanBoba(uang, callback) {
  // Your code here

  // -------- Bagian Boba -----------
  // diket :
  let sisaUang = uang; // penampung baru

  // Boba: Rp. 5.000, estimated time to get boba: 5 second
  // pernyataan 1
  setTimeout(() => {
    let hargaBoba = 5000;
    sisaUang = uang - hargaBoba;
    if (sisaUang <= 0) {
      console.log("Maaf uang kamu belum cukup untuk membeli Boba");
      console.log("Sisa uang kamu sebesar" + uang);
      console.log("\n"); // newline
    }
    // pernyataan 2
    else {
      console.log("kamu jajan boba dengan harga Rp." + hargaBoba);
      console.log("sisa uang kamu adalah Rp." + sisaUang);
      console.log("\n"); // newline
    }
  }, 5000); // Boba: Rp. 5.000, estimated time to get boba: 5 second

  setTimeout(() => {
    callback(sisaUang);
  }, 9000); // Seblak: Rp. 8.000, estimated time to get seblak: 9 second
}

//---------------------------- Bagian Seblak-------------------------------//

function jajanSeblak(uang) {
  // Your code here

  // penampung baru
  let hargaSeblak = 8000;
  let sisaUang = uang - hargaSeblak;

  // Seblak : Rp. 8.000, perkiraan waktu untuk mendapatkan seblak: 9 detik
  if (sisaUang < 0) {
    // pernyataan 2
    console.log("Maaf uang kamu belum cukup untuk membeli boba dan seblak");
    console.log("Sisa uang kamu adalah Rp." + uang);
  } else {
    // pernyataan 2
    console.log("Kamu jajan seblak dengan harga Rp." + hargaSeblak);
    console.log("Sisa uang kamu adalah Rp." + sisaUang);
  }
}

jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
