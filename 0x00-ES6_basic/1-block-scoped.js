export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Create a variable task
    const task2 = false; // Create a variable task2
  }
  
  return [task, task2];
}
