import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import { CircularProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Protectedroutes = ({ component }) => {


    // use navigate 
    const navigate = useNavigate()

    // use state
    const [isuser, setisuser] = useState(false)

    //  use efect
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {

                // const uid = user.uid;
                // console.log('user ha ', uid);
                
                navigate('/login')
                return
            }else{
                setisuser(true)

            }
        });

    }, [])
    return (
        isuser ?
            component :
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh', // Set height to 100% of the viewport height
                }}
            >
                <CircularProgress size={50} />
            </div>


    )
}

export default Protectedroutes
