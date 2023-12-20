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
      if (num1 === 0) {
        toast.error("Zero is not divisible!");
        break;
      }
      if (num2 === 0) {
        toast.error("A number cannot be divided by Zero!");
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
