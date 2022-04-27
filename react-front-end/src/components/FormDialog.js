import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Fab, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: 10,
    color: "black",
    backgroundColor: "DeepSkyBlue"
  },
  addEx: {
    // display: "flex",
    // position: "fixed",
    // bottom: "70px",
    // margin: "2%",
    // alignItems: "center"
  }
}));


export default function FormDialog() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Exercise
      </Button> */}
      {/* style={{padding: 50}} */}

      <div className={classes.addEx} >
        <Fab size="small" className={classes.addButton} onClick={handleClickOpen} >
          <AddIcon />
        </Fab>
        <label>Add an exercise</label>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            Add an exercise to save it to your list of exercises
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Exercise name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          
          {/* Add exercise to db here?? */}
          <Button onClick={handleClose} color="primary">
            Add Exercise
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
