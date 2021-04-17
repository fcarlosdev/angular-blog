export const getDayAndMonth = (fromDate: string) => {
  let date = new Date(fromDate);
  return date.toLocaleString('default', { month: 'short' }).concat(" " + date.getDate());
}
