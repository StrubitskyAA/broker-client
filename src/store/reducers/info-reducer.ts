import { infoInterface } from "../../ts-types";

import { infoActionTypesEnum } from "../constants/redux-constants";
import { alertColorsEnum } from "../../constants/colors";

const initialState: infoInterface = {
  infoText: "",
  infoType: alertColorsEnum.success,
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case infoActionTypesEnum.setInfoMessage:
      return {
        ...state,
        infoText: payload.infoText,
        infoType: payload.infoType,
      };
    case infoActionTypesEnum.clearInfoMessage:
      return {
        ...state,
        infoText: initialState.infoText,
      };
    default:
      return { ...state };
  }
};

export default reducer;
