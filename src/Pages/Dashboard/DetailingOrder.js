import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DetailingOrder = () => {
    const [detailingOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/detailingOrderbooking?CustomerEmail=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setDetailingOrders(data)
                })
        }
    }, [user])
    return (

        <div>
            <h2 className='text-center'>You have Ordered Total: {detailingOrders.length}</h2>
        </div>
    );
};

export default DetailingOrder;