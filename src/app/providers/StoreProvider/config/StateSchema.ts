import { TableSchema } from 'entities/Table/model/types/tableSchema';

export interface StateSchema {
    table: TableSchema;
}

export type StateSchemaKey = keyof StateSchema;
