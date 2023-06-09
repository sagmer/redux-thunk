import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./notification-slice";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    updateCounter(state, action) {
      if (action.payload === "inc") {
        state.value++;
      } else if (action.payload === "dec") {
        state.value--;
      }
    },
  },
});

export const changeCounter = (val, type) => {
  return async (dispatch) => {
    dispatch(notificationActions.updateNotification("sending"));
    const sendReq = async () => {
      const response = await fetch(
        "https://mediumprojects-f255b-default-rtdb.firebaseio.com/counter.json",
        {
          method: "PUT",
          body: JSON.stringify({ value: val }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendReq();
      dispatch(counterActions.updateCounter(type));
      dispatch(notificationActions.updateNotification("sent"));
    } catch (error) {
      notificationActions.updateNotification("error");
    }
  };
};

export const counterActions = counterSlice.actions;
export default counterSlice;
