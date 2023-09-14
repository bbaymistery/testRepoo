
export const containsUppercase = (str) => /[A-Z]/.test(str);
export const lowercaseSecondLetter = (string) => string.charAt(1).toLowerCase() + string.slice(2);
export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
