export const getPostDate = (date: string) => {
  const now = new Date();
  const specifiedDate = new Date(date);
  const differenceInMilliseconds = now.getTime() - specifiedDate.getTime();
  const differenceInMinutes = Math.floor(
    differenceInMilliseconds / (1000 * 60)
  );
  return differenceInMinutes;
};
