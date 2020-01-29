import React from 'react';
import MuiTablePagination from '@material-ui/core/TablePagination';

import { useDataTable } from '../context';

interface Props {}

export const DataTablePagination: React.FC<Props> = () => {
  const {
    currentPage,
    filters,
    rows,
    rowsPerPage,
    setCurrentPage,
    setRowsPerPage,
  } = useDataTable();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ): void => {
    setCurrentPage(page);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <MuiTablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={
        rows.filter(row =>
          row.every((value, index) => filters[index] === 'All' || filters[index] === value),
        ).length
      }
      page={currentPage}
      rowsPerPage={rowsPerPage}
      backIconButtonProps={{
        'aria-label': 'previous page',
      }}
      nextIconButtonProps={{
        'aria-label': 'next page',
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};
