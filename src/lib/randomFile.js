export default files => {
  let count = 0;
  for (const file in files) {
    if (Math.random() < 1 / ++ count) return file;
  }
};
