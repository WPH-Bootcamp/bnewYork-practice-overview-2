// 1. Synchronous
// console.log(1);
// console.log(2);
// console.log(3);

// 2. Asynchronous
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// Callback -> Fungsi yang dikirimkan ke fungsi lain sebagai argument
function fungsi1(name, callback) {
  console.log(name);
  callback();
}

// Invoke (Pemanggilan Function)
fungsi1("Ucup", function () {
  console.log("Done.");
});

// Callback Pyramid
setTimeout(function () {
  console.log("Langkah 1");
  setTimeout(function () {
    console.log("Langkah 2");
    setTimeout(() => {
      console.log("Langkah 3");
    }, 3000);
  }, 2000);
}, 1000);
