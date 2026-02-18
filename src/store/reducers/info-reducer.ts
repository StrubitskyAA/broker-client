import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IInfo } from "../../ts-types";

import { alertColorsEnum } from "../../constants/colors";

const initialState: IInfo = {
  infoText: "",
  infoType: alertColorsEnum.error,
};

const InfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfoMessage: (state, action: PayloadAction<IInfo>) => {
      state.infoText = action.payload.infoText;
      state.infoType = action.payload.infoType;
    },
    resetInfoMessare: (state) => {
      state.infoText = initialState.infoText;
      state.infoType = initialState.infoType;
    },
  },
});

export const { setInfoMessage, resetInfoMessare } = InfoSlice.actions;
export default InfoSlice;
