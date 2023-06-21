import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TableSchema } from '../types/tableSchema';

const initialState: TableSchema = {
    search: '',
    editMode: false,
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        switchEditMode: (state) => {
            state.editMode = !state.editMode;
        },
    },
});

export const { actions: tableActions } = tableSlice;
export const { reducer: tableReducer } = tableSlice;
