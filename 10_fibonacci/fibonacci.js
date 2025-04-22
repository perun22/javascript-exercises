const fibonacci = (input) => {
  let num;
  if (typeof input !== 'number') {
    num = parseInt(input);
  } else {
    num = input;
  }

  if (num < 0) return 'OOPS';
  if (num == 0) return 0;

  const sequence = [0, 1];
  for (let i = 2; i <= num; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
