import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { tableReducer } from 'entities/Table/model/slice/tableSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        table: tableReducer,
    };

    const store = configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
