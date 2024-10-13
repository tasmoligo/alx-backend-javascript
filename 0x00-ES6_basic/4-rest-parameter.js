export default function returnHowManyArguments(...suppliedArgs) {
  let supplied = 0;
  let arg;
  for (arg of suppliedArgs) {
      supplied += 1;
  }
  return supplied;
}
