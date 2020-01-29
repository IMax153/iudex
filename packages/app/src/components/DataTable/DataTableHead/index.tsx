import React from 'react';
import { TableHead as MuiTableHead } from '@material-ui/core';

import { DataTableHeadRow } from '../DataTableHeadRow';
import { DataTableHeadCell } from '../DataTableHeadCell';
import { useDataTable } from '../context';

interface Props {}

export const DataTableHead: React.FC<Props> = () => {
  const { columns, setOrderByColumn } = useDataTable();

  return (
    <MuiTableHead>
      <DataTableHeadRow>
        {columns.map((column, index) => (
          <React.Fragment key={column.id}>
            {column.visible && (
              <DataTableHeadCell
                key={column.id}
                index={index}
                column={column}
                onOrderBy={direction => setOrderByColumn(index, direction)}
              />
            )}
          </React.Fragment>
        ))}
      </DataTableHeadRow>
    </MuiTableHead>
  );
};
