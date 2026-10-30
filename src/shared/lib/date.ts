export const toDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getToday = (): string => toDateString(new Date());

export const addDays = (dateString: string, days: number): string => {
  const [year, month, day] = dateString.split("-").map(Number);

  return toDateString(new Date(year, month - 1, day + days));
};
