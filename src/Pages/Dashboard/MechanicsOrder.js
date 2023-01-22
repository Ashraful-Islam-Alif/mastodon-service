import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MechanicsOrder = () => {
    const [mechanicsOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`https://mastodon-service-server.vercel.app/mechanicsOrderbooking?CustomerEmail=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setDetailingOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center'>You have Ordered Total: {mechanicsOrders.length}</h2>
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mechanicsOrders.map((s, index) => <tr
                                key={s._id}
                            >
                                <th>{index + 1}</th>
                                <td>{s.CustomerName}</td>
                                <td>{s.Cbrands}</td>
                                <td>{s.Cmodel}</td>
                                <td>{s.CPackage}</td>
                                <td>{s.CPrice}</td>
                                <td>{(s.CPrice && !s.paid) && <Link to={`/dashboard/mechanicsPayment/${s._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(s.CPrice && s.paid) && <span className='btn btn-xs btn-success'>Paid</span>}</td>
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
                            <th>Payment</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MechanicsOrder;