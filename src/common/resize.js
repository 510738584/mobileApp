function getRem(width, rem) {
  const html = document.getElementsByTagName('html')[0];
  const oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  if (oWidth >= 750) {
    html.style.fontSize = '100px';
  } else {
    html.style.fontSize = `${(oWidth / width) * rem}px`;
  }
}
function onload() {
  getRem(750, 100);
}
window.onload = onload();

function resize() {
  getRem(750, 100);
}

window.onresize = resize();
