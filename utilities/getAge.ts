
const age = () => {
  const currentDate = new Date().getFullYear();
  const birthYear = new Date(Date.UTC(1997, 2, 21)).getFullYear();
  const age = currentDate - birthYear;
  return age;
};
const getYears = (date: Date) => {
  const currentYear = new Date().getFullYear();
  return currentYear - date.getFullYear();
};
export default age;
export { age, getYears };