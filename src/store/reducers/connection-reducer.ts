import { connectionInterface } from "../../ts-types";

import { connectionActionTypesEnum } from "../constants/redux-constants";

const initialState: connectionInterface = {
  hasConnection: true,
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case connectionActionTypesEnum.setConnectionStatus:
      return {
        ...state,
        hasConnection: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
