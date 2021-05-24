import { dataNumber, dataRu } from "./data";
export const ShaOut = (string: string) => {
  string = string.toLowerCase();
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let tmp = string[i];
    for (let g = 0; g < dataRu.length; g++) {
      if (dataRu[g] === tmp) {
        newString += dataRu[g - 1];
      } else if (tmp === dataRu[0]) {
        newString += dataRu[dataRu.length - 1];
      } else {
        for (let t = 0; t < dataNumber.length; t++) {
          if (dataNumber[t] === tmp) {
            newString += dataNumber[t - 1];
          } else if (tmp === dataNumber[0]) {
            newString += dataNumber[dataRu.length - 1];
          }
        }
      }
    }
  }
  console.log(newString, "testDeSha");
};
