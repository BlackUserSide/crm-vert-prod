export const ShaOut = (string: string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let tmp = string[i];
    let code = tmp.charCodeAt(0);
    newString += String.fromCharCode(code - 1);
  }
  return newString;
};
