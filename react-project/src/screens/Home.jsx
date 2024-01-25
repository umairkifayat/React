import React, { useRef, useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Button, TextField } from '@mui/material';
import MultiActionAreaCard from '../components/Card';

const Home = () => {
  const todoVal = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, 'todo'));
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });
    });
    setData(todos);
  };

  const todoFunc = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, 'todo'), {
        todo: todoVal.current.value,
      });

      // Clear the input field after adding todo
      todoVal.current.value = '';

      // Update the data by fetching it again
      getDataFromFirestore();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <form onSubmit={todoFunc}>
        <TextField id='outlined-basic' label='Todo' variant='outlined' required inputRef={todoVal} />
        <Button type='submit' variant='contained'>
          Add Todo
        </Button>
      </form>

      {/* Display each todo in a card format */}
      {data.map((todo) => (
        <MultiActionAreaCard key={todo.id} todo={todo.todo} />
      ))}
    </>
  );
};

export default Home;
