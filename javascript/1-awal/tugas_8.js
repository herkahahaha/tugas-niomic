const object = () => {
  let data = { name: "Ujangs", umur: 29, kimpoi: false };
  console.log(data);
  const dataBaru = { ...data, kimpoi: true };
  return console.log(dataBaru);
};
object();
