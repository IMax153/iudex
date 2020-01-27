import { createStyles, darken, makeStyles } from '@material-ui/core/styles';

const DRAWER_WIDTH = 260;

export const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      backgroundColor: '#ffffff',
      minHeight: 56,
      [theme.breakpoints.up('sm')]: {
        minHeight: 64,
      },
    },
    body: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f7f9fc',
    },
    content: {
      flex: '1 1 0%',
      display: 'flex',
      flexDirection: 'column',
    },
    drawer: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: DRAWER_WIDTH,
    },
    drawerBookend: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: 56,
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(1),
      backgroundColor: '#232f3e',
      color: '#eeeeee',
      [theme.breakpoints.up('sm')]: {
        minHeight: 64,
      },
    },
    drawerList: {
      flexGrow: 1,
      overflowY: 'auto',
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      borderRight: 0,
    },
    search: {
      color: theme.palette.text.secondary,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 56,
      [theme.breakpoints.up('sm')]: {
        minHeight: 64,
      },
    },
  }),
);
