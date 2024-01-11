export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const wKM = weakMap.get(endpoint);
    if (wKM >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, wKM + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
