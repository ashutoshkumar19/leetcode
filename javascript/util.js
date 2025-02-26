// Generate string of any length
export const generateString = (length, type = '', space = false) => {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789';
  if (type === 'u') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ';
  } else if (type === 'l') {
    characters = 'abcdefghiklmnopqrstuvwxyz';
  } else if (type === 'n') {
    characters = '0123456789';
  } else if (type === 'ul') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  } else if (type === 'un') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZ0123456789';
  } else if (type === 'ln') {
    characters = 'abcdefghiklmnopqrstuvwxyz0123456789';
  } else if (type === 'uln') {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789';
  } else if (type !== '') {
    characters = type;
  }
  if (space) {
    characters += ' ';
  }
  let str = '';
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * characters.length);
    str += characters.substring(num, num + 1);
  }
  return str;
};

// Generate random integer between two integers
export const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate array of any length with random integers filled
export const generateIntegerArray = (length, min, max) => {
  length = length > 1 ? length : 1;
  return new Array(length).fill().map(() => generateRandomInteger(min, max));
};
