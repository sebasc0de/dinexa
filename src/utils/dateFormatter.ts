export const dateFormatter = (date: string) => {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString(
    "en-US",
    options as any
  );

  return formattedDate;
};
