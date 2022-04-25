import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  header: {
    backgroundColor: "DeepSkyBlue",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  }
});

const BottomNav = () => {

  const classes = useStyles();

  return (

    <div className="App">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <Typography variant="h6"> Barbell Buddy </Typography>
          {/* <AccountCircleIcon /> */}
        </Toolbar>
      </AppBar>
    </div>

  );

}

export default BottomNav;