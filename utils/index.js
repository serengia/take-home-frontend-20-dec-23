import { toast } from "react-toastify";

export const calculate = (number1, number2, operation) => {
  let res = 0;
  switch (operation.toLowerCase()) {
    case "+":
      res = number1 + number2;
      break;
    case "-":
      res = number1 - number2;
      break;
    case "x":
      res = number1 * number2;
      break;
    case "÷":
      if (number1 === 0 || number2 === 0) {
        res = "DIVISION-ERR";
        break;
      }

      res = number1 / number2;
      break;

    default:
      res = 0;
      break;
  }

  return res;
};
