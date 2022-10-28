module.exports = function (num) {
  let fibbSeq = [0, 1];
  let counter = fibbSeq[fibbSeq.length - 2] + fibbSeq[fibbSeq.length -1]
  while (counter <= num) {
    fibbSeq.push(counter);
    counter = fibbSeq[fibbSeq.length - 2] + fibbSeq[fibbSeq.length -1]
  }

  let sumOddFibbNumber = 0;
  fibbSeq.forEach(function(num) {
    if (num % 2 != 0) {
      sumOddFibbNumber +=num;

    }
  });
  return sumOddFibbNumber;
}
