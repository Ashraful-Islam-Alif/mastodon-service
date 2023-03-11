import React from 'react';
import { IdentificationIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'
const mastodonInfo = () => {
    return (
        <div className='container mx-auto py-32 px-8'>

            <div className='grid grid-cols-1 lg:grid-cols-3 items-center  justify-items-center gap-4'>
                <div className='flex flex-col items-center  bg-gray-200 p-12 m-8 rounded-2xl shadow-2xl lg:h-72 lg:w-96'>
                    <div>
                        <IdentificationIcon className="h-12 w-24 md:h-24 md:w-24 text-[#99ca3fc4]" />
                    </div>
                    <div>
                        <p className='text-md md:text-xl p-4'>Fill Your Information</p>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-gray-200 p-12 m-8 rounded-2xl shadow-2xl lg:h-72 lg:w-96'>
                    <div>
                        <CalendarDaysIcon className="h-12 w-24 md:h-24 md:w-24 text-[#99ca3fc4]" />
                    </div>
                    <div>
                        <p className='text-md md:text-xl p-4 text-center'>Select Your Product/Services</p>
                    </div>
                </div>
                <div className='flex flex-col items-center bg-gray-200 p-12 m-8 rounded-2xl shadow-2xl lg:h-72 lg:w-96'>
                    <div>
                        <FontAwesomeIcon className="h-12 w-24 md:h-24 md:w-24 text-[#99ca3fc4]" icon={faCar} />
                    </div>
                    <div>
                        <p className='text-md md:text-xl p-4'>Get Served at Your Door</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default mastodonInfo;