// Makes sure variables aren’t overwritten inside the conditional block.
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (true Or false) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
