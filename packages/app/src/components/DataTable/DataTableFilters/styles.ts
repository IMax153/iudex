import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filtersHeader: {
      display: 'flex',
    },
    formControl: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    popoverPaper: {
      minWidth: '250px',
      minHeight: '300px',
      padding: theme.spacing(2),
    },
    resetLink: {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      fontSize: '12px',
      padding: theme.spacing(0),
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.secondary.dark,
        cursor: 'pointer',
      },
    },
  }),
);
