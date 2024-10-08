// Makes sure variables aren’t overwritten inside the conditional block.
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (true Or false) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
