import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import BookIcon from '@material-ui/icons/Book';
import ForumTwoToneIcon from '@material-ui/icons/ForumTwoTone';

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "DeepSkyBlue",
   }
}));

const BottomNav = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Calendar" icon={<CalendarTodayIcon onClick={() => window.location.href = '/calendar'} />} />
      <BottomNavigationAction label="Exercises" icon={<FitnessCenterIcon onClick={() => window.location.href = '/exercises'}  />} />
      <BottomNavigationAction label="Daily Log" icon={<BookIcon onClick={() => window.location.href = '/day'}  />} />
      <BottomNavigationAction label="Chat" icon={<ForumTwoToneIcon onClick={() => window.location.href = '/chat'}  />} />
    </BottomNavigation>

  );

}

export default BottomNav;