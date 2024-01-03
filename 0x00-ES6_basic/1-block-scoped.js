export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Modify a variable task
    const task2 = false; // Modify a variable task2
  }

  return [task, task2];
}
