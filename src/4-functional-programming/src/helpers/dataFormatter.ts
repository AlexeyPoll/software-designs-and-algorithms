
import type { Store } from "../storeTypes";

import { OPTIONS_TYPES, Row, SORT_TYPES } from "../components"

const filterRows = (filters: string[], rows: Row[]): Row[] => rows.filter(row => (
        (filters.includes(OPTIONS_TYPES.WITHOUT_POSTS) && row.posts === 0) ||
        (filters.includes(OPTIONS_TYPES.MORE_THEN_100) && row.posts >= 100)
    )
);

const searchRows = (search: string, rows: Row[]): Row[] => rows.filter(row => {
        const lowerName = row.name.toLocaleLowerCase();
        const lowerSearch = search.toLocaleLowerCase();
        const lowerCountry = row.country.toLocaleLowerCase();
        const lowerUsername = row.username.toLocaleLowerCase();

        return (
            lowerName.includes(lowerSearch) || 
            lowerCountry.includes(lowerSearch) || 
            lowerUsername.includes(lowerSearch)
        );
    }
);

const sortRows = (sort: string, rows: Row[]): Row[] => {
    if (sort === SORT_TYPES.DESC) {
        return rows.sort((rowA, rowB) => rowA.lastPayments < rowB.lastPayments ? 1 : -1);
    } else if (sort === SORT_TYPES.ASC) {
        return rows.sort((rowA, rowB) => rowA.lastPayments > rowB.lastPayments ? 1 : -1);
    } else {
        return rows;
    }
}

export const createDataFormatter = (store: Store) => 
    (rows: Row[]): Row[] => {
        let updatedRows = [...rows];

        if (store.filters.length > 0) {
            updatedRows = filterRows(store.filters, updatedRows);
        }

        if (store.search) {
            updatedRows = searchRows(store.search, updatedRows);
        }

        if (store.sort) {
            updatedRows = sortRows(store.sort, updatedRows);
        }
    
        return updatedRows;
    } 
