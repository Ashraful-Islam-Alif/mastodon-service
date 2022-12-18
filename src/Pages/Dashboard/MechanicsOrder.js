import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MechanicsOrder = () => {
    const [mechanicsOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/mechanicsOrderbooking?CustomerEmail=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setDetailingOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center'>You have Ordered Total: {mechanicsOrders.length}</h2>
        </div>
    );
};

export default MechanicsOrder;