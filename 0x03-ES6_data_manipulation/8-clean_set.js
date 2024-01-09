export default function cleanSet(SetCLN, startString) {
  const myset = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  SetCLN.forEach((i) => {
    if (typeof i === 'string' && i.startsWith(startString)) {
      myset.push(i.slice(startString.length));
    }
  });
  return myset.join('-');
}
