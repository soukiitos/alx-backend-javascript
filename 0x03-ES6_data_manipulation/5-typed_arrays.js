export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const Arrint8 = new DataView(buffer);
  Arrint8.setInt8(position, value);

  return Arrint8;
}
