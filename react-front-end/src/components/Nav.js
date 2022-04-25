import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import "./Nav.css"

const useStyles = makeStyles((theme) => ({
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
  },
  profileIcon:{
    marginLeft: theme.spacing(24),
    // display: "flex",
  },
  icon:{ height: "20px"},
  something: {}
}));

const Nav = () => {

  const classes = useStyles();

  return (

    <div className="App">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
        <img src="images/icon.png" className={classes.icon} alt="icon" />
          <Typography variant="h6"> Barbell Buddy </Typography>

          <div className={classes.something} >
            <AccountCircleIcon className={classes.profileIcon}/>
          </div>

        </Toolbar>
      </AppBar>
    </div>

  );

}

export default Nav;