export function formatPrettyDate(date: Date) {
  const optionsDate = {
    month: "long",
    day: "numeric",
    year: "numeric",
  } as const;
  const optionsTime = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  } as const;

  return `${date.toLocaleDateString(
    "en-US",
    optionsDate
  )} | ${date.toLocaleTimeString("en-US", optionsTime)}`;
}

export function formatDateMonthYear(date: Date) {
  const raw_date = new Date(date);
  const formatted_date = raw_date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return formatted_date;
}
