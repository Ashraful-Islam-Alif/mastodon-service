import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SparePartsOrder = () => {
    const [sparePartsOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/sparePartsOrderbooking?CustomerEmail=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setDetailingOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center'>You have Ordered Total: {sparePartsOrders.length}</h2>
        </div>
    );
};

export default SparePartsOrder;