const age = () => {
  const today = new Date();
  const birthday = new Date(1997, 2, 21);
  const years = today.getFullYear() - birthday.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() &&
      today.getDate() >= birthday.getDate());
  return hadBirthdayThisYear ? years : years - 1;
};
const getYears = (date: Date) => {
  const currentYear = new Date().getFullYear();
  return currentYear - date.getFullYear();
};
export default age;
export { age, getYears };
