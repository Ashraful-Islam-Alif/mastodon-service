import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Login/Login/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L51bZCZ4BDWrDsU72y5MjwEabOirFnzo6Ee30kzkZx5UVixxmE6vVl7hrrrGopOoch08AhUUYVdSCO8czBnYGm500RSVNzqUh');

const DetailingPayment = () => {
    const { id } = useParams();
    const url = `https://mastodon-service-server.vercel.app/detailingOrderbooking/${id}`;

    const [payment, setPayment] = useState([])
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setPayment(data)
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className='card w-50 max-w-md bg-base-100 shadow-xl my-12'>
                <div className='card-body'>
                    <p className='text-success'>Hello, {payment.CustomerName}</p>
                    <h2>Please pay: ${payment.CPrice} </h2>
                </div>
            </div>
            <div className='card flex-shrink-0 w-50 max-w-md bg-base-100 shadow-xl'>
                <div className='card-body'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default DetailingPayment;