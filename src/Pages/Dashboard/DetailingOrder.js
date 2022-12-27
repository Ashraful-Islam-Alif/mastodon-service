import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const DetailingOrder = () => {
    const [detailingOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/detailingOrderbooking?CustomerEmail=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setDetailingOrders(data)
                })
        }
    }, [user])
    return (

        <div>
            <h2 className='text-center'>You have Ordered Total: {detailingOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Package</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            detailingOrders.map((s, index) => <tr
                                key={s._id}
                            >
                                <th>{index + 1}</th>
                                <td>{s.CustomerName}</td>
                                <td>{s.Cbrands}</td>
                                <td>{s.Cmodel}</td>
                                <td>{s.CPackage}</td>
                                <td>{s.CPrice}</td>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Package</th>
                            <th>Price</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default DetailingOrder;