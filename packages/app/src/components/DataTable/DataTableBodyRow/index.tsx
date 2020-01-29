import React from 'react';
import { TableCell as MuiTableCell, TableRow as MuiTableRow } from '@material-ui/core';

import { useDataTable, Row } from '../context';
import { useStyles } from './styles';

interface Props {
  row: Row;
}

export const DataTableBodyRow: React.FC<Props> = ({ row }) => {
  const classes = useStyles();
  const { columns } = useDataTable();

  return (
    <MuiTableRow className={classes.row} hover>
      {row.map((value, rowIndex) => {
        const { visible } = columns[rowIndex];

        return (
          visible && (
            <MuiTableCell key={`TableBodyRow:${columns[rowIndex].id}`}>{value}</MuiTableCell>
          )
        );
      })}
    </MuiTableRow>
  );
};
