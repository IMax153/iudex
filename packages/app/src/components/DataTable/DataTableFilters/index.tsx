import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Popover,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons';

import { useDataTable, Row } from '../context';
import { useStyles } from './styles';

interface Props {}

export const DataTableFilters: React.FC<Props> = () => {
  const classes = useStyles();
  const { columns, filters, rows, resetRows, setRowFilter } = useDataTable();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowFilter(index, event.target.value);
  };

  const asc = (index: number) => (a: Row, b: Row) => {
    if (b[index] < a[index]) return 1;
    if (b[index] > a[index]) return -1;
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

  const open = Boolean(anchorEl);
  const id = open ? 'Table Filters' : undefined;

  return (
    <React.Fragment>
      <Tooltip title="Filter Table">
        <IconButton aria-label={id} aria-describedby={id} onClick={handleOpen}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: classes.popoverPaper,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.filtersHeader}>
              <Typography component="h6" variant="h5">
                Filters
              </Typography>
              <Button
                color="primary"
                size="small"
                onClick={() => resetRows()}
                className={classes.resetLink}
              >
                Reset
              </Button>
            </div>
          </Grid>
          {columns.map((column, columnIndex) => (
            <Grid key={column.id} item xs={12} md={6}>
              <TextField
                label={column.label}
                variant="outlined"
                margin="dense"
                value={filters[columnIndex] || 'All'}
                onChange={handleChange(columnIndex)}
                select
                fullWidth
              >
                <MenuItem value="All">All</MenuItem>
                {stableSort(rows, asc(columnIndex)).map((row, rowIndex) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <MenuItem key={`${column.id}-row-${rowIndex}`} value={row[columnIndex]}>
                    {row[columnIndex]}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </React.Fragment>
  );
};
