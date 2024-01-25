import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const MultiActionAreaCard = ({ todo }) => {
  const handleDelete = () => {
    // Add your delete logic here
    console.log('Delete:', todo);
  };

  const handleEdit = () => {
    // Add your edit logic here
    console.log('Edit:', todo);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: '16px' }}>
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
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button variant="contained" onClick={handleEdit}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default MultiActionAreaCard;
