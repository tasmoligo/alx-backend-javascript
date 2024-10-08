export default function(list) {
  return list.reduce((sum, num) => sum + num.id, 0);
}
