import { indicatorTextStyles } from "./text-styles";
import colors from "../constants/colors";
import { flexCentered } from "./flex-styles";

export const indicatorContainerStyles = {
  borderRadius: "8px",
  borderWidth: "1px",
  borderStyle: "solid",
  BorderColor: colors.grey600,
  // padding: "8px, 4px",
  ...indicatorTextStyles,
};

export const inputStyles = {
  borderRadius: "8px",
  borderWidth: "1px",
  fontWeight: 400,
  fontStyle: "Regular",
  fontSize: "14px",
  lineHeight: "100%",
  letterSpacing: "0%",
  width: "100%",
};

export const blockWrapperStyles = {
  width: "100%",
  borderRadius: "16px",
  padding: "20px",
  border: `1px solid ${colors.grey50}`,
  boxSizing: "border-box",
  color: colors.black,
  overflow: "hidden",
  position: "relative",
};

export const currencyAvatarStyles = {
  border: `1px solid ${colors.blue200}`,
  bgcolor: colors.blue25,
  color: colors.blue600,
  mr: "4px",
};

export const selectorStyles = {
  border: `1px solid ${colors.grey600}`,
  bgcolor: colors.white,
  borderRadius: "8px",
};
export const dividerStyles = { color: colors.grey25 };
export const overlayStyles = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  ...flexCentered,
};
