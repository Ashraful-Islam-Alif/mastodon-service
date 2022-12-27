import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Login/Loading';
import AllUsersRow from './AllUsersRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()
            ))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AllUsersRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></AllUsersRow>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;