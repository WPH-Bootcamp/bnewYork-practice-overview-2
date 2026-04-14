// Promise -> Janji
const sudahMenang = false;

const janji = new Promise(function (resolve, reject) {
  if (sudahMenang === true) {
    setTimeout(() => {
      resolve("YEAYYY BERHASILLL");
    }, 1000);
  } else {
    reject("yaahhh.. gagal nich....");
  }
});

janji
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
