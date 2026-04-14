Promise.resolve(10)
  .then((num1) => {
    console.log("Step 1 :", num1);
    return num1 + 5;
  })
  .then((num2) => {
    console.log("Step 2 :", num2);
    return num2 + 3;
  })
  .then((num3) => {
    console.log("Step 3 :", num3);
  });
