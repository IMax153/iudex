import React from 'react';
import { TableBody as MuiTableBody } from '@material-ui/core';

import { DataTableBodyRow } from '../DataTableBodyRow';
import { useDataTable, Column, Row } from '../context';

interface Props {}

export const DataTableBody: React.FC<Props> = () => {
  const { columns, filters, rows, currentPage, rowsPerPage } = useDataTable();

  const desc = (a: Row, b: Row, index: number) => {
    if (b[index] < a[index]) return -1;
    if (b[index] > a[index]) return 1;
    return 0;
  };

  const stableSort = (array: Row[], cmp: (a: Row, b: Row) => number) => {
    const stabilizedArray = array.map((el, index) => [el, index] as [Row, number]);

    stabilizedArray.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });

    return stabilizedArray.map(el => el[0]);
  };

  const getSorting = (columns: Column[]): ((a: Row, b: Row) => number) => {
    const orderByColumn = columns.findIndex(col => col.orderBy);
    const orderByIndex = orderByColumn === -1 ? 0 : orderByColumn;

    return columns[orderByIndex].orderByDirection === 'desc'
      ? (a, b) => desc(a, b, orderByIndex)
      : (a, b) => -desc(a, b, orderByIndex);
  };

  return (
    <MuiTableBody>
      {stableSort(rows, getSorting(columns))
        .filter(row =>
          row.every((value, index) => filters[index] === 'All' || filters[index] === value),
        )
        .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
        .map(row => (
          <DataTableBodyRow key={`TableBody:${JSON.stringify(row)}`} row={row} />
        ))}
    </MuiTableBody>
  );
};
