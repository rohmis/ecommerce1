// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./RegisterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";


const persistConfig = {
  key: "root",
  storage,
};
const persistVar = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistVar,
  },
});
const persistor = persistStore(store);
export  {persistor,store};
