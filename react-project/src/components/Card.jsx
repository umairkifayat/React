import React, { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MultiActionAreaCard = ({ todo,deletefunc,updatefunc ,index}) => {

  const savevalue = useRef()
const [showtodo , setshowtodo] = useState(true)

const savedata = ()=>{
  setshowtodo(true);
  updatefunc( savevalue.current.value,index)
}

  return (
<>
{showtodo ?     <Card sx={{ maxWidth: 345, margin: '16px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {todo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          color="error" // This sets the color to red for the delete button
          startIcon={<DeleteIcon />}
          onClick={()=>deletefunc(index)}
        >
          Delete
        </Button>
        <Button variant="contained"  onClick={()=>setshowtodo(false)}>
          Edit
        </Button>
      </CardActions>
    </Card>:<div>
     
      <TextField id='outlined-basic' label='Edited todo' variant='outlined' inputRef={savevalue} required />
      <Button variant="contained" onClick={savedata} >
          save
        </Button>
    
      </div>}
</>
  );
};

export default MultiActionAreaCard;
