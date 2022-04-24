import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function CalendarPage() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <section>

      <Calendar />
      {/* either on click to save date(moment.js? or just link to day page) */}
      <button>SELECT DATE</button>

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>

    </section>
  );

}

export default CalendarPage;