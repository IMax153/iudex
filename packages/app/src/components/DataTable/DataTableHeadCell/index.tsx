import React from 'react';
import { TableCell as MuiTableCell, TableSortLabel as MuiTableSortLabel } from '@material-ui/core';
import { get } from 'shades';

import { Column } from '../context';
import { useStyles } from './styles';

interface Props {
  index: number;
  column: Column;
  onOrderBy: (direction: 'asc' | 'desc') => void;
}

export const DataTableHeadCell: React.FC<Props> = ({ index, column, onOrderBy }) => {
  const classes = useStyles();
  const isOrderByColumn = get('orderBy')(column);
  const direction = get('orderByDirection')(column);

  const handleOrderBy = () => {
    onOrderBy(direction === 'asc' ? 'desc' : 'asc');
  };

  return (
    <MuiTableCell sortDirection={isOrderByColumn ? direction : undefined}>
      <MuiTableSortLabel active={isOrderByColumn} direction={direction} onClick={handleOrderBy}>
        {column.label}

        {isOrderByColumn && (
          <span className={classes.visuallyHidden}>
            {direction === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </span>
        )}
      </MuiTableSortLabel>
    </MuiTableCell>
  );
};
