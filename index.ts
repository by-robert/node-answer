// hash map of values with string names
const numberMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
  [10, 'ten'],
  [11, 'eleven'],
  [12, 'twelve'],
  [13, 'thirteen'],
  [14, 'fourteen'],
  [15, 'fifteen'],
  [16, 'sixteen'],
  [17, 'seventeen'],
  [18, 'eighteen'],
  [19, 'nineteen'],
]);

/**
 * funtion to take a number and return the string name of the number
 * @input number 1
 * @returns string "one"
 */
export function getNumber(input: number) {
  if (input <= 0 || input >= 100) {
    return 'unsupported value: ' + input;
  }
  if (input >= 20) {
    return checkIfSecondDigitZero(input);
  } else {
    // less than 20, do switch
    return numberMap.get(input);
  }
}

function tensNumbers(input: number) {
  switch (input) {
    case 1:
      return 'ten';
    case 2:
      return 'twenty';
    case 3:
      return 'thirty';
    case 4:
      return 'fourty';
    case 5:
      return 'fifty';
    case 6:
      return 'sixty';
    case 7:
      return 'seventy';
    case 8:
      return 'eighty';
    case 9:
      return 'ninety';
    default:
      return 'error';
  }
}

function checkIfSecondDigitZero(input: number) {
  const digits = input.toString();
  if (digits.length === 2) {
    const start = tensNumbers(Number(digits[0]));
    const end = numberMap.get(Number(digits[1]));
    if (end) {
      return start + '-' + end;
    } else {
      return start;
    }
  } else {
    return 'unsupported value: ' + input;
  }
}
