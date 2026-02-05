import { IInfo } from "../../ts-types";

import { infoActionTypesEnum } from "../constants/redux-constants";

export const setInfoMessageAction = (message: IInfo) => ({
  type: infoActionTypesEnum.setInfoMessage,
  payload: message,
});

export const clearInfoMessageAction = () => ({
  type: infoActionTypesEnum.clearInfoMessage,
});
