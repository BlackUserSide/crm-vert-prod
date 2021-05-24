import { dataNumber, dataRu } from "./data";
import { ShaOut } from "./ShaOut";
export const Shain = (string: string, id: number) => {
  string = string.toLowerCase();
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let tmp = string[i];
    for (let g = 0; g < dataRu.length; g++) {
      if (dataRu[g] === tmp) {
        if (tmp === "я") {
          newString += dataRu[0];
        } else {
          newString += dataRu[g + 1];
        }
      } else {
        for (let t = 0; t < dataNumber.length; t++) {
          if (dataNumber[t] === tmp) {
            if (tmp === "0") {
              newString += dataNumber[0];
            } else {
              newString += dataNumber[t + 1];
            }
          }
        }
      }
    }
  }
  let name = `${id}_desc`;
  localStorage.setItem(name, newString);
  ShaOut(newString);
};
