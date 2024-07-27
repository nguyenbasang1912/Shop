import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './slices/auth';
import {cartReducer} from './slices/cart';
import {favoriteReducer} from './slices/favorite';
import {userReducer} from './slices/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { orderReducer } from './slices/order';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    user: userReducer,
    order: orderReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
