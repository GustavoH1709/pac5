import parser from "number-parsing";

export const decimalParser = (value: string) => parser(value || 0, { br: 1 });