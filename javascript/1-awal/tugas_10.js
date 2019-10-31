const tugas10 = () => {
  const data = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
  let beta;
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
  console.log("=====================");
  for (beta of data) {
    console.log(beta);
  }
};
tugas10();
