export default function (str) {
  let res = str;
  if (res < 1000) {
    return res;
  } if (res >= 1000 && res < 10000) {
    res = `${(res / 1000).toFixed(1)}k`;
    return res;
  } if (res >= 10000 && res < 100000) {
    res = `${(res / 10000).toFixed(1)}w`;
    return res;
  } if (res >= 100000) {
    res = '10w+';
    return res;
  }
  return res;
}
