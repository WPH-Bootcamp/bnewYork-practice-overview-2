// Promise
function delay(ms, val, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`Error at ${val}`);
      } else {
        resolve(val);
      }
    }, ms);
  });
}

// 1. Promise All -> Semua Harus Berhasil
Promise.all([delay(1000, "A"), delay(2000, "B"), delay(1600, "C", true)])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// 2. Promise Race -> Siapa Cepat Dia Menang
Promise.race([delay(1000, "Slow"), delay(3000, "Fast")])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 3. Promise AllSettled -> Tunggu Semua, Tidak Peduli Gagal
Promise.allSettled([delay(1000, "Success"), delay(300, "Fail", true)])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
