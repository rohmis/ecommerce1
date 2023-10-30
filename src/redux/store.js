
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './RegisterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false }), /* other middlewares */],
});

const persistor = persistStore(store);

export { persistor, store };
