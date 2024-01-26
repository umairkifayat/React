import React, { useRef, useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, where, query, orderBy } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { Button, TextField } from '@mui/material';
import MultiActionAreaCard from '../components/Card';
import { onAuthStateChanged } from 'firebase/auth';

const Home = () => {
  const todoVal = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataFromFirestore();
  }, []);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const q = query(collection(db, "todo"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
      getDataFromFirestore(uid);
    }
  });

  // get data on firestore 
  async function getDataFromFirestore(uid) {
    const querySnapshot = await getDocs(query(collection(db, "todo"), orderBy('timestamp', 'desc'), where('uid', '==', uid)));
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({ ...doc.data(), docId: doc.id });
    });
    setData(todos);
  }

  // delete function
  const deletefunc = async (index) => {
    try {
      await deleteDoc(doc(db, 'todo', data[index].docId));
      const newData = [...data];
      newData.splice(index, 1);
      setData(newData);
      console.log('Post deleted');
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  // update function 
  const updatefunc = async (value, index) => {
    try {
      // Update the todo item in the Firestore database
      await updateDoc(doc(db, "todo", data[index].docId), {
        todo: value,
      });

      // Update the data in the local state
      const updatedData = [...data];
      updatedData[index].todo = value;
      setData(updatedData);

      console.log('Post updated');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  // post data on firestore 
  const todoFunc = async (event) => {
    event.preventDefault();
    const obj = {
      todo: todoVal.current.value,
      uid: auth.currentUser.uid,
      timestamp: new Date(), // Assuming you have a timestamp field
    };
    try {
      await addDoc(collection(db, "todo"), obj);
      console.log('Todo added successfully');
      getDataFromFirestore(auth.currentUser.uid);
      todoVal.current.value = ''; // Clear the input field after adding todo
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

      {data.length > 0 ? (
        data.map((todo, index) => (
          <MultiActionAreaCard key={todo.id} todo={todo.todo} deletefunc={() => deletefunc(index)} updatefunc={updatefunc} index={index} />
        ))
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
};

export default Home;
