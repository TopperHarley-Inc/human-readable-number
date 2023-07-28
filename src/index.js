module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const groups = ['', 'thousand', 'million', 'billion', 'trillion'];

    function convertToWords(n) {
      if (n === 0) return '';
      if (n < 10) return units[n];
      if (n < 20) return teens[n - 11];
      if (n < 100) return tens[Math.floor(n / 10)] + ' ' + units[n % 10];
      if (n < 1000) return units[Math.floor(n / 100)] + ' hundred ' + convertToWords(n % 100);
      for (let i = 1; i < groups.length; i++) {
        const base = 1000 ** i;
        if (n < base ** 2) {
          return convertToWords(Math.floor(n / base)) + ' ' + groups[i] + ' ' + convertToWords(n % base);
        }
      }
    }

    if (number === 0) return 'zero';
    if (number < 0) return 'minus ' + numberToWords(-number);

    const numberString = number.toLocaleString('en-US');
    const parts = numberString.split('.');
    const wholePart = parseInt(parts[0], 10);
    const fractionalPart = parts[1] ? ' point ' + parts[1] : '';

    return convertToWords(wholePart) + fractionalPart;
}
