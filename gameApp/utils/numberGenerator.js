export default function NumberGenerator(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return NumberGenerator(min, max, exclude);
  } else {
    return rndNum;
  }
}
