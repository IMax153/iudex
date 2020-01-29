import React, { useState } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Popover,
  Tooltip,
} from '@material-ui/core';
import { ViewColumn as FilterColumnIcon } from '@material-ui/icons';

import { useDataTable } from '../context';
import { useStyles } from './styles';

interface Props {}

export const DataTableColumnFilters: React.FC<Props> = () => {
  const classes = useStyles();
  const { columns, toggleColumnVisibility } = useDataTable();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'Table Column Visibility' : undefined;

  return (
    <React.Fragment>
      <Tooltip title="Filter Table">
        <IconButton aria-label={id} aria-describedby={id} onClick={handleOpen}>
          <FilterColumnIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
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
        <FormControl component="fieldset" className={classes.root}>
          <FormLabel component="legend" className={classes.title}>
            Show Columns
          </FormLabel>
          {columns.map((column, columnIndex) => (
            <FormControlLabel
              key={column.id}
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabel,
              }}
              control={
                <Checkbox
                  value={column.id}
                  checked={column.visible}
                  onChange={() => toggleColumnVisibility(columnIndex)}
                  classes={{
                    root: classes.checkboxRoot,
                    checked: classes.checked,
                  }}
                  className={classes.checkbox}
                />
              }
              label={column.label}
            />
          ))}
        </FormControl>
      </Popover>
    </React.Fragment>
  );
};
