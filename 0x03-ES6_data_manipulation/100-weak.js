export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const wkM = weakMap.get(endpoint);
    if (wkM >= 4) throw new Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
