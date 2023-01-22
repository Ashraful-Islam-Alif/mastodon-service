import React from 'react';
import { toast } from 'react-toastify';
const AllUsersRow = ({ user, refetch, index }) => {
    const { email, role, _id } = user;
    const makeAdmin = () => {
        fetch(`https://mastodon-service-server.vercel.app/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an Admin')
                }
            })
    }
    const handleDeleteUser = (_id) => {
        fetch(`https://mastodon-service-server.vercel.app/users/admin/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Successfully deleted an Admin')
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleDeleteUser(_id)} className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default AllUsersRow;