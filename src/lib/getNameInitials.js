export default name  => {
  const initials = [];
  name.split(` `)
    .forEach(pt => initials.push(pt.charAt(0).toUpperCase()));

  return initials;
};
