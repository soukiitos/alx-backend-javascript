export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const queryCount = weakMap.get(endpoint);

    if (queryCount >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, queryCount + 1);
  }
}
