export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = !task; // Modify a variable task
    task = !task2; // Modify a variable task2
  }

  return [task, task2];
}
