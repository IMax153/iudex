import React from 'react';
import { TableRow as MuiTableRow } from '@material-ui/core';

interface Props {}

export const DataTableHeadRow: React.FC<Props> = ({ children }) => {
  return <MuiTableRow>{children}</MuiTableRow>;
};
