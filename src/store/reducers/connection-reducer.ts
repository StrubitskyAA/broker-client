import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { connectionInterface } from "../../ts-types";

const initialState: connectionInterface = {
  hasConnection: true,
};

const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {
    setConnectionStatus: (state, action: PayloadAction<boolean>) => {
      state.hasConnection = action.payload;
    },
  },
});

export const { setConnectionStatus } = connectionSlice.actions;
export default connectionSlice;
