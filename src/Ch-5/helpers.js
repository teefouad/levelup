export const zeroize = (value) => `${value < 10 ? '0' : ''}${value}`;
export const toTimeString = (time) => {
  let remainder = time;

  const hours = Math.floor(time / 60 / 60 / 100);
  remainder -= hours * 60 * 60 * 100;

  const minutes = Math.floor(remainder / 60 / 100);
  remainder -= minutes * 60 * 100;

  const seconds = Math.floor(remainder / 100);
  remainder -= seconds * 100;

  const milliseconds = remainder;

  return `${zeroize(hours)}:${zeroize(minutes)}:${zeroize(seconds)}:${zeroize(milliseconds)}`;
};
