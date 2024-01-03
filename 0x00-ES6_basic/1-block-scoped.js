export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = !task; // Modify a variable task
    task = !task2; // Modify a variable task2
  }

  return [task, task2];
}
