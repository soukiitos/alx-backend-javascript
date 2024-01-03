export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Create a variable task
    task2 = false; // Create a variable task2
  }

  return [task, task2];
}
