import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRAHE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './reduser-contacts';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export default store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTolls: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
