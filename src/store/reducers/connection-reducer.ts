import { connectionStateType } from "../ts-types";

import { connectionStatusActionTypesEnum } from "../constants/redux-constants";

const initialState: connectionStateType = {
  connectionStatus: false,
};

const reducer = (state = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case connectionStatusActionTypesEnum.setConnectionStatus:
      return { ...state, connectionStatus: payload };
    default:
      return state;
  }
};

export default reducer;
