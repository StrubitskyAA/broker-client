import { createContext } from "react";

import { infoContextInterface, IInfo } from "../../ts-types";
import { alertColorsEnum } from "../../constants/colors";

export const initialInfoState: IInfo = {
  infoText: "",
  infoType: alertColorsEnum.success,
};
const initialInfoContextState: infoContextInterface = {
  info: initialInfoState,
  setInfo: () => undefined,
};

export default createContext<infoContextInterface>(initialInfoContextState);
