export default function (timeStamp) {
  const date = new Date(+timeStamp * 1000);
  let str = '';
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  str += `${y}-${m}-${d}`;
  return str;
}
