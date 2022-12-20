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
                            detailingOrders.map((s, index) => <tr>
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