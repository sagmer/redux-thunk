import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter-slice';
import notificationSlice from './notification-slice';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, notification: notificationSlice.reducer },
});

export default store;