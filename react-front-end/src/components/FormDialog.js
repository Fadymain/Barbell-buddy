import React, {useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExerciseContext from './ExerciseContext';

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


export default function FormDialog(props) {

  const classes = useStyles();
  const {state, addExercise} = useContext(ExerciseContext);
  const [open, setOpen] = useState(false);
  const [exerciseType, setExerciseType] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("successfully adding exercise", exerciseType);
    addExercise(exerciseType);
    setExerciseType("");
    setOpen(false);
  }

  return (
    <div>

      <div className={classes.addEx} >
        <Fab size="small" className={classes.addButton} onClick={handleClickOpen} >
          <AddIcon />
        </Fab>
        <label>Add an exercise</label>
      </div>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
        <form autoComplete='off' onSubmit={handleCreate} className={classes.addEx} id="myform" >

        <input type="exercise" placeholder='Add exercise' id="exercise" name="exercise" value={exerciseType} onChange={(event) => setExerciseType(event.target.value)} />
        
      </form>
        </DialogContent>
        <DialogActions>
        <Button  color="primary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" type="submit" form="myform">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}