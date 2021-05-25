export const Shain = (string: string, id: number, nameLocal: string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let tmp = string[i];
    let code = tmp.charCodeAt(0);
    newString += String.fromCharCode(code + 1);
  }
  let name = "";
  if (nameLocal === "desc") {
    name = `${id}_desc`;
  } else if (nameLocal === "card") {
    name = `${id}_card`;
  } else if (nameLocal === "mmyy") {
    name = `${id}_mmyy`;
  } else if (nameLocal === "cvv") {
    name = `${id}_cvv`;
  }

  localStorage.setItem(name, newString);
};
