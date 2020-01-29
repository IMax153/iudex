import { createContext, useContext } from 'react';

export interface Column {
  id: string;
  label: string;
  filterable: boolean;
  orderBy: boolean;
  orderByDirection: 'asc' | 'desc';
  sortable: boolean;
  visible: boolean;
}

export type Value = string | number;

export type Row = Value[];

export interface Context {
  columns: Column[];
  rows: Row[];
  filters: Value[];
  currentPage: number;
  rowsPerPage: number;
  searchTerm: string;
  deleteRow: (index: number) => void;
  performSearch: (searchString: string) => void;
  resetRows: () => void;
  setCurrentPage: (currentPage: number) => void;
  setOrderByColumn: (index: number, direction: 'asc' | 'desc') => void;
  setRowFilter: (columnIndex: number, value: Value) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
  setSearchTerm: (searchString: string) => void;
  toggleColumnVisibility: (index: number) => void;
}

const noop = () => {};

export const DataTableContext = createContext<Context>({
  columns: [],
  rows: [],
  filters: [],
  currentPage: 0,
  rowsPerPage: 0,
  searchTerm: '',
  deleteRow: noop,
  performSearch: noop,
  resetRows: noop,
  setCurrentPage: noop,
  setOrderByColumn: noop,
  setRowFilter: noop,
  setRowsPerPage: noop,
  setSearchTerm: noop,
  toggleColumnVisibility: noop,
});

export const useDataTable = () => useContext(DataTableContext);
