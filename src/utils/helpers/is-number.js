export function isNumber(value) {
  return value && /[^0-9]/i.test(value) ? false : true;
}
