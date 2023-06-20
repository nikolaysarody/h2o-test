import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableSchema } from '../types/tableSchema';

const initialState: TableSchema = {
    search: '',
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { actions: tableActions } = tableSlice;
export const { reducer: tableReducer } = tableSlice;
