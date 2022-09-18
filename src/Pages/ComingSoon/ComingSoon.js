import React from 'react';

const ComingSoon = ({ hoursMinSecs }) => {
    const { days = 30, hours = 24, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[day, hrs, mins, secs], setTime] = React.useState([days, hours, minutes, seconds]);


    const tick = () => {
        if (day === 0 && hrs === 0 && mins === 0 && secs === 0)
            reset()
        else if (hrs === 0 && mins === 0 && secs === 0) {
            setTime([day - 1, hrs - 1, 59, 59]);
        }
        else if (mins === 0 && secs === 0) {
            setTime([day - 1, hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([day, hrs, mins - 1, 59]);
        } else {
            setTime([day, hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(days), parseInt(hours), parseInt(minutes), parseInt(seconds)]);


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });
    return (
        <div className='text-4xl text-center p-8 my-6 font-medium bg-gradient-to-r from-green-400 via-red-300 to-orange-100'>
            <h2 className='font-bold'>Flat Discount</h2>
            <h2 className='text-lg'>Coming Soon</h2>
            <p className='p-4 sm:text-lg lg:text-7xl font-extrabold '>{`
            ${day.toString().padStart(2, '0')}
            :${hrs.toString().padStart(2, '0')}
            :${mins.toString().padStart(2, '0')}
            :${secs.toString().padStart(2, '0')}`}
            </p>
            <p className=' xs:text-base md:text-xl lg:text-2xl lg:pl-4'><span className='md:pl-2 lg:pr-16'>Day</span> <span className='md:pl-2 lg:pr-14'>Date</span> <span className='md:pl-2 lg:pl-4'>Min</span> <span className='md:pl-2 lg:pl-20'>Sec</span></p>
        </div>
    );
};

export default ComingSoon;