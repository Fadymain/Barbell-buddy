import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "DeepSkyBlue",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
  },
  root: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center"
  },
  profileIcon: {
    marginLeft: "50%",
  },
  font: {
    fontWeight: 700,
    paddingLeft: "5%"
  }
}));

const Nav = () => {

  const classes = useStyles();

  return (

    <div className="Nav">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar >
          <img src="/images/barbell.png" alt="barbell" style={{ height: "30px" }} />
          <Typography className={classes.font} > Barbell Buddy </Typography>
          <AccountCircleIcon className={classes.profileIcon} />
        </Toolbar>
      </AppBar>
    </div>

  );

}

export default Nav;