export const returnDate = (dateNow: boolean, createdAt?: string): string => {
  const date = createdAt ? createdAt : Date.now();

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
