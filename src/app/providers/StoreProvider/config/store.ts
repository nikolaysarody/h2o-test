import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// import { counterReducer } from 'entities/Counter';
// import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        // user: userReducer,
    };

    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
