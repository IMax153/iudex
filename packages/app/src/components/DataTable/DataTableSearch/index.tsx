import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

import { useDebounce } from '../../../hooks/useDebounce';
import { useDataTable } from '../context';
import { useStyles } from './styles';

interface Props {}

export const DataTableSearch: React.FC<Props> = () => {
  const classes = useStyles();
  const { searchTerm, setSearchTerm, performSearch } = useDataTable();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    performSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, performSearch]);

  return (
    <TextField
      margin="dense"
      size="small"
      variant="outlined"
      placeholder="Search table..."
      value={searchTerm}
      inputProps={{
        className: classes.searchInput,
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      InputProps={{
        startAdornment: <SearchIcon color="action" />,
        className: classes.searchInputBase,
      }}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
};
