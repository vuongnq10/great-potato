import { select, insert } from '.';

const COLLECTION: string = "client_data";

export const write = (data: any): Promise<any> => insert({ data, collection: COLLECTION });

export const selectAll = (): Promise<any> => select({ collection: COLLECTION });