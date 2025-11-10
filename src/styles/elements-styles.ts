import colors from "../constants/colors";

import {
  hoveredClassName,
  selectedClassName,
} from "../constants/general-constants";

import { flexCentered } from "./flex-styles";
import { indicatorTextStyles } from "./text-styles";

export const indicatorContainerStyles = {
  borderRadius: "8px",
  borderWidth: "1px",
  borderStyle: "solid",
  BorderColor: colors.grey600,
  height: "23px",
  ...indicatorTextStyles,
};

const inputStyles = {
  fontFamily: '"Inter", sans-serif !important',
  fontWeight: 500,
  fontSize: "14px",
  borderRadius: "8px",
  border: `1px solid ${colors.grey50}`,
  "&:focus": {
    borderColor: colors.blue200,
  },
};

export const inputContainerStyles = {
  fontFamily: '"Inter", sans-serif !important',
  borderRadius: "8px",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "100%",
  width: "100%",
  "& input": inputStyles,
};

export const searchStyles = {
  ...inputContainerStyles,
  position: "relative",
  mt: 2,
  mb: 1,
  "& div": { width: "100%", m: 0 },
  "& input": { ...inputStyles, textIndent: "35px", width: "100%" },
};

export const searchButtonStyles = {
  position: "absolute",
  top: "50%",
  left: "10px",
  transform: "translateY(-50%)",
  zInex: 1,
  p: 0,
};

export const numberInputStyles = {
  ...inputContainerStyles,
  "& input": {
    ...inputStyles,
    textAlign: "center",
  },
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
  fontFamily: '"Inter", sans-serif !important',
  border: `1px solid ${colors.blue200}`,
  bgcolor: colors.blue25,
  color: colors.blue600,
  mr: "12px",
  width: "30px",
  height: "30px",
  fontSize: "12px",
};

export const selectorStyles = {
  border: `1px solid ${colors.grey50}`,
  bgcolor: colors.white,
  borderRadius: "8px",
  padding: 0,
};
export const dividerStyles = { color: colors.grey25, margin: "16px 0" };
export const overlayStyles = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  backgroundColor: colors.white,
  ...flexCentered,
};

export const currencyButtonStyles = {
  height: "42px",
  padding: "4px 8px",
  [`&.${selectedClassName}`]: { backgroundColor: colors.blue25 },
  [`&.${hoveredClassName}`]: { boxShadow: `0 0 10px ${colors.blue200}` },
};
