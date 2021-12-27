export const htmlDecode = input => {
  let e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes[0].nodeValue;
};
