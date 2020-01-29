import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    checkbox: {
      padding: theme.spacing(0),
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    checkboxRoot: {
      '&$checked': {
        color: theme.palette.primary.main,
      },
    },
    checked: {},
    formControlLabelRoot: {},
    formControlLabel: {
      fontSize: theme.spacing(2),
      marginLeft: theme.spacing(1),
      color: theme.palette.text.primary,
    },
    popoverPaper: {
      padding: theme.spacing(2, 0, 0, 1),
    },
    title: {
      marginLeft: -theme.spacing(1),
      fontSize: theme.typography.fontSize,
      color: theme.palette.text.secondary,
      textAlign: 'left',
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
);
