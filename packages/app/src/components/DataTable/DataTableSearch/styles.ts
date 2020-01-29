import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    searchInput: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    searchInputBase: {
      paddingLeft: theme.spacing(1),
    },
  }),
);
