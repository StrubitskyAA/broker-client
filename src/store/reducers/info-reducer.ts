import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IInfo } from "../../ts-types";

import { alertColorsEnum } from "../../constants/colors";

const initialState: IInfo = {
  infoText: "",
  infoType: alertColorsEnum.success,
};

const InfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfoMessage: (state, action: PayloadAction<IInfo>) => {
      state = action.payload;
    },
    resetInfoMessare: (state) => {
      state = initialState;
    },
  },
});

export const { setInfoMessage, resetInfoMessare } = InfoSlice.actions;
export default InfoSlice;
