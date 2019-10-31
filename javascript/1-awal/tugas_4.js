function tinggiBadan() {
  var anjang = 180;
  var daslim = 170;
  var smekot = 160;
  if (anjang === 160) {
    console.log(`tinggi badan anjang adalah ${anjang}`);
  } else {
    console.log(`tinggi ${smekot} dimiliki smekot`);
  }
  const listTinggi = [anjang, daslim, smekot];
  console.log(
    listTinggi.sort(function(a, b) {
      return b - a;
    })
  );
}
tinggiBadan();
