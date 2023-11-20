import { select, insert } from '.';

const COLLECTION = "client_data";

export const write = data => insert({ data, collection: COLLECTION });

export const selectAll = () => select({ collection: COLLECTION });