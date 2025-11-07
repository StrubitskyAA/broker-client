export const flexStyles = { display: "flex" };
export const flexRowStyles = { ...flexStyles, flexDirection: "row" };
export const flexColStyles = { ...flexStyles, flexDirection: "column" };
export const flexFullStyles = { ...flexStyles, flex: "1" };
export const flexSpaceBetween = {
  ...flexStyles,
  justifyContent: "space-between",
};
export const flexSpaceAround = {
  ...flexStyles,
  justifyContent: "space-around",
};
export const flexJustCentered = { ...flexStyles, justifyContent: "center" };
export const flexJustEnd = { ...flexStyles, justifyContent: "flex-end" };
export const flexJustStart = { ...flexStyles, justifyContent: "flex-start" };
export const flexItemCentered = { ...flexStyles, alignItems: "center" };
export const flexItemStart = { ...flexStyles, alignItems: "flex-start" };
export const flexCentered = {
  ...flexJustCentered,
  ...flexItemCentered,
};
export const flexColStartStyles = {
  ...flexColStyles,
  justifyContent: "flex-start",
};
