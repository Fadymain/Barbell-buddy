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
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  profileIcon:{
    marginLeft: theme.spacing(20),
    // display: "flex",
  },
  // icon:{ height: "20px"},
}));

const Nav = () => {

  const classes = useStyles();

  return (

    <div className="App">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
        <img src="images/icon.png" alt="icon" style={ {height: "30px"} } />
          <Typography variant="h6"> Barbell Buddy </Typography>

            <AccountCircleIcon className={classes.profileIcon}/>

        </Toolbar>
      </AppBar>
    </div>

  );

}

export default Nav;