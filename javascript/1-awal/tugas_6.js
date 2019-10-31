const perulanganModulus = () => {
  let dataGanjil = [];
  let dataGenap = [];
  for (var i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
      dataGanjil.push(i);
    } else if (i % 2 === 0) {
      dataGenap.push("genap");
    }
  }
  return { dataGanjil, dataGenap };
};
console.log(perulanganModulus());
