import React, { useCallback, useState } from 'react';
import { all, get, has, map, mod, set, toggle, updateAll } from 'shades';
import { Paper, Table } from '@material-ui/core';

import { DataTableBody } from './DataTableBody';
import { DataTableHead } from './DataTableHead';
import { DataTablePagination } from './DataTablePagination';
import { DataTableToolbar } from './DataTableToolbar';
import { DataTableContext, Column, Row, Value } from './context';
import { useStyles } from './styles';
import { uniqueId } from '../../utils/uniqueId';

type ColumnOptions = Pick<Column, 'id' | 'label'> & Omit<Partial<Column>, 'id' | 'label'>;

interface Props {
  columns: (string | ColumnOptions)[];
  rows: Row[];
  title?: string;
  elevation?: number;
  dense?: boolean;
}

interface State {
  columns: Column[];
  rows: Row[];
  filters: Value[];
  currentPage: number;
  rowsPerPage: number;
}

export const DataTable: React.FC<Props> = ({
  columns: rawColumns,
  rows: rawRows,
  title,
  elevation = 0,
  dense = false,
}) => {
  const classes = useStyles();

  const createColumn = (column: string | ColumnOptions): Column => ({
    id: uniqueId('data-table'),
    label: column,
    filterable: true,
    orderBy: false,
    orderByDirection: 'asc',
    sortable: true,
    visible: true,
    ...((typeof column === 'string' ? {} : column) as ColumnOptions),
  });

  const initialState = {
    columns: rawColumns.map(createColumn),
    rows: rawRows,
    filters: Array(rawColumns.length).fill('All'),
    currentPage: 0,
    rowsPerPage: 10,
  };

  const [state, setState] = useState<State>(initialState);
  const [searchValue, setSearchValue] = useState('');

  const deleteRow = useCallback((index: number) => {
    setState(mod('rows')(rows => rows.filter((_, i) => i === index)));
  }, []);

  const resetRows = useCallback(() => {
    setState(updateAll(set('rows')(initialState.rows), set('filters')(initialState.filters)));
  }, [initialState.filters, initialState.rows]);

  const search = useCallback(
    (searchString: string) => {
      setState(
        mod('rows')(() =>
          rawRows.filter(row =>
            row.some(value =>
              String(value)
                .toLowerCase()
                .includes(searchString.toLowerCase()),
            ),
          ),
        ),
      );
    },
    [rawRows],
  );

  const setCurrentPage = useCallback((currentPage: number) => {
    setState(set('currentPage')(currentPage));
  }, []);

  const setOrderByColumn = useCallback((index: number, direction: 'asc' | 'desc') => {
    setState(
      updateAll(
        // Explicit boolean cast here to avoid `Type 'boolean' is not assignable to type 'false | undefined'`
        set('columns', all(), 'orderBy')(false as boolean),
        set('columns', index, 'orderByDirection')(direction),
        mod('columns', index, 'orderBy')(toggle),
      ),
    );
  }, []);

  const setRowFilter = useCallback((columnIndex: number, value: Value) => {
    setState(
      mod('filters')(filters => [
        ...filters.slice(0, columnIndex),
        value,
        ...filters.slice(columnIndex + 1),
      ]),
    );
  }, []);

  const setRowsPerPage = useCallback((rowsPerPage: number) => {
    setState(set('rowsPerPage')(rowsPerPage));
  }, []);

  const setSearchTerm = useCallback((searchTerm: string) => {
    setSearchValue(searchTerm);
  }, []);

  const toggleColumnVisibility = useCallback(
    (index: number) => {
      const isFilterable = has({ filterable: true });

      if (isFilterable(get('columns', index)(state))) {
        setState(mod('columns', index, 'visible')(toggle));
      }
    },
    [state],
  );

  return (
    <DataTableContext.Provider
      value={{
        ...state,
        deleteRow,
        searchTerm: searchValue,
        performSearch: search,
        resetRows,
        setCurrentPage,
        setOrderByColumn,
        setRowFilter,
        setRowsPerPage,
        setSearchTerm,
        toggleColumnVisibility,
      }}
    >
      <Paper className={classes.paper} elevation={elevation}>
        <DataTableToolbar title={title} />

        <div className={classes.tableContainer}>
          <Table size={dense ? 'small' : 'medium'}>
            <DataTableHead />
            <DataTableBody />
          </Table>
        </div>

        <DataTablePagination />
      </Paper>
    </DataTableContext.Provider>
  );
};

DataTable.displayName = 'DataTable';
