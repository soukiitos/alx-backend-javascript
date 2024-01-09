export default function updateUniqueItems(UniItems) {
  if (!(UniItems instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of UniItems) {
    if (quantity === 1) {
      UniItems.set(item, 100);
    }
  }

  return UniItems;
}
