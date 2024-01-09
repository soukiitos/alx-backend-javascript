export default function cleanSet(SetCLN, startString) {
  const string = Array.from(SetCLN).filter((set) => set.startsWith(startString));
  return string.join('-');
}
