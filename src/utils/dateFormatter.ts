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
