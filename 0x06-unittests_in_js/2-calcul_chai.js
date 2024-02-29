// Combining descriptions

function calculateNumber(type, a, b) {
  const firstNum = Math.round(a);
  const secondNum = Math.round(b);

  if (type === 'SUBTRACT') {
    return firstNum - secondNum;
  }

  if (type === 'DIVIDE') {
    if (secondNum === 0) {
      return 'Error';
    }
    return firstNum / secondNum;
  }

  return firstNum + secondNum;
}

module.exports = calculateNumber;
