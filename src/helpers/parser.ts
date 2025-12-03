export const parsePeriodeType = (s: string) => {
  return s.toLowerCase() === "before" ? "before" : "now";
};
