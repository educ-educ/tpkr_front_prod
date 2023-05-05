import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth_slice';
import { usersReducer } from './users_slice';

export * from './auth_slice';
export * from './users_slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer
    },
});
