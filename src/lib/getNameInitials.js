/**
 * Get the initials from a person's name. Ignores dashes in surname
 * @param  {String} name [A person's name]
 * @return {Array<String>}
 */
export default name => {
  const initials = [];
  name.split(` `).forEach(pt => initials.push(pt.charAt(0).toUpperCase()));

  return initials;
};
