import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const DetailingOrder = () => {
    const [detailingOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://mastodon-service-server.vercel.app/detailingOrderbooking?CustomerEmail=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
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
                            <th>Payment</th>
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
                                <td>{(s.CPrice && !s.paid) && <Link to={`/dashboard/detailPayment/${s._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(s.CPrice && s.paid) &&
                                        <div>
                                            <p> <span className='text-green-500 font-bold text-center'>Paid</span></p>
                                            <p>Transaction id: <span className='text-green-500 font-bold text-center'>{s.transactionId}</span></p>
                                        </div>
                                    }
                                </td>
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

export default DetailingOrder;