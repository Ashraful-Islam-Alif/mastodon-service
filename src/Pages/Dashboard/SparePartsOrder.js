import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SparePartsOrder = () => {
    const [sparePartsOrders, setDetailingOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`https://mastodon-service-server.vercel.app/sparePartsOrderbooking?CustomerEmail=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setDetailingOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center'>You have Ordered Total: {sparePartsOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Car Brand</th>
                            <th>Car Model</th>
                            <th>Car Categories</th>
                            <th>Car Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sparePartsOrders.map((s, index) => <tr
                                key={s._id}
                            >
                                <th>{index + 1}</th>
                                <td>{s.CustomerName}</td>
                                <td>{s.Cbrands}</td>
                                <td>{s.Cmodel}</td>
                                <td>{s.CCategories}</td>
                                <td>{s.CTypes}</td>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Car Brand</th>
                            <th>Car Model</th>
                            <th>Car Categories</th>
                            <th>Car Types</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default SparePartsOrder;