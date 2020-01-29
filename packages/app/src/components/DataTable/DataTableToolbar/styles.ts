import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    toolbarFilters: {
      display: 'flex',
      alignItems: 'center',
    },
    toolbarSearch: {
      marginRight: theme.spacing(2),
    },
  }),
);
