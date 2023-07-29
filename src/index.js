module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (typeof number !== 'number' || number < 0 || number >= 1000) {
    throw new Error('Invalid input. The number must be a positive three-digit integer.');
  }

  if (number === 0) return 'zero';
  const nStringLength = number.toString().length;
  if (nStringLength === 1) return units[number];

  const hundredsDigit = Math.floor(number / 100);
  const tensDigit = Math.floor((number % 100) / 10);
  const unitsDigit = number % 10;

  let words = '';

  if (hundredsDigit > 0) {
    words += units[hundredsDigit] + ' hundred';
    if ((tensDigit > 0 || unitsDigit > 0) && tensDigit !== 0) {
      words += ' ';
    }
  }

  if (tensDigit > 0 || unitsDigit > 0) {
    if (tensDigit === 1 && unitsDigit > 0) {
      words += teens[unitsDigit - 1];
    } else {
      words += tens[tensDigit];
      if (unitsDigit > 0) {
        words += (tensDigit !== 0 ? ' ' : ' ') + units[unitsDigit];
      }
    }
  }

  return words;
}