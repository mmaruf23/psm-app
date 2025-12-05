export const parsePeriodeType = (s: string) => {
  return s.toLowerCase() === "before" ? "before" : "now";
};

export const parseItemProgramName = (s: string) => {
  const ss = s.split(" ");
  return ss[0] + " " + ss[1];
};
