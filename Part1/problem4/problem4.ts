function lottery(num: number) {
  // Your code here

  console.log("undian lotre dimulai...");
  console.log("sedang mengundi nomor anda...");

  let angka = 1 <= 1000;

  const lottery = new Promise((reject, resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 1000);

      if (randomNumber !== angka) {
        reject("maaf anda kurang beruntung");
      }
      resolve("selamat anda mendapatkan hadiah utama berupa mobil");

      lottery
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .finally(() => console.log("undian lotre telah berakhir..."));
    }, 10000);
  });
}

export default lottery;
