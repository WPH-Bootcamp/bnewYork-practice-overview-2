const mesinKopi = false;
const pesanan = new Promise((resolve, reject) => {
  if (mesinKopi === true) {
    resolve("Kopi sudah jadii....");
  } else {
    reject(new Error("Yahhh error, mesin kopi rusak"));
  }
});

pesanan
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err.message))
  .finally(() => console.log("silahkan pesan lagi nanti..."));
