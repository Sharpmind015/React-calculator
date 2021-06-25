export const calculateByOperator = expression => {
  if (expression.length === 1) return;
  const [operand1, operator, operand2] = expression;
  let result;
  if (operator === "+") result = Number(operand1) + Number(operand2);
  if (operator === "-") result = Number(operand1) - Number(operand2);
  if (operator === "÷") result = Number(operand1) / Number(operand2);
  if (operator === "x") result = Number(operand1) * Number(operand2);
  if (operator === "%") result = Number(operand1) % Number(operand2);
  return parseFloat(result.toFixed(5));
};
