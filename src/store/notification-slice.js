import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    status: null
  },
  reducers: {
    updateNotification(state, action) {
      state.status = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;