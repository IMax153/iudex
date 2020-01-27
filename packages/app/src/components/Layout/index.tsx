import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './styles';

interface Props {}

export const Layout: React.FC<Props> = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [navigationOpen, setNavigationOpen] = useState(false);

  const handleMobileNavigationToggle = () => {
    setNavigationOpen(open => !open);
  };

  return (
    <Box className={classes.body}>
      <Drawer
        anchor="left"
        variant={isMobile ? 'temporary' : 'permanent'}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={navigationOpen}
        onClose={handleMobileNavigationToggle}
      >
        <Box className={classes.drawerBookend}>
          <Typography component="h2" variant="h5">
            Iudex
          </Typography>
        </Box>
        <Box className={classes.drawerList}>
          <List>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
            <ListItem>Item</ListItem>
          </List>
        </Box>
        <Box className={classes.drawerBookend}>
          <Typography component="h2" variant="h5">
            Maxwell Brown
          </Typography>
        </Box>
      </Drawer>
      <Box className={classes.content}>
        <AppBar position="sticky" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            {isMobile && (
              <Tooltip title="Open Navigation" arrow>
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={handleMobileNavigationToggle}
                  disableRipple
                >
                  <MenuIcon color="action" />
                </IconButton>
              </Tooltip>
            )}
            <TextField
              color="secondary"
              size="small"
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon color="action" />,
              }}
              className={classes.search}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};
