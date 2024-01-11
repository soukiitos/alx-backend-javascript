export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const wkM = weakMap.get(endpoint);
    weakMap.set(endpoint, wkM + 1);
    if (wkM >= 4) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
