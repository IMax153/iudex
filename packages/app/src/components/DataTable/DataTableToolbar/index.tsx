import React from 'react';
import { Box, Toolbar, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { DataTableColumnFilters } from '../DataTableColumnFilters';
import { DataTableFilters } from '../DataTableFilters';
import { DataTableSearch } from '../DataTableSearch';

interface Props {
  title?: string;
}

export const DataTableToolbar: React.FC<Props> = ({ title }) => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <Typography id="table-title" component="h5" variant="h3" color="inherit">
        {title || ''}
      </Typography>

      <Box className={classes.toolbarFilters}>
        <Box className={classes.toolbarSearch}>
          <DataTableSearch />
        </Box>
        <DataTableColumnFilters />
        <DataTableFilters />
      </Box>
    </Toolbar>
  );
};
