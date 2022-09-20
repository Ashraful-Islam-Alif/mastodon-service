import React from 'react';

const Blogs = () => {
    return (
        <div id='blog' className='container mx-auto py-32 px-8'>
            <h2 className='text-center text-6xl font-bold py-8'>Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 '>

                <div className=" p-4 m-4 shadow-lg shadow-gray-300/80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className='flex justify-center items-center'>
                        <img className='w-24 rounded-full ' src="https://i.ibb.co/fGL54H9/image-1.png" />
                        <h2 className='font-bold'>Helal Uddin</h2>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>"One of the best vehicle servicing workshop in Dhaka. They have a very good team of experts and highly skilled technical people"</p>
                </div>
                <div className="p-4 m-4 shadow-lg shadow-gray-300/80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className='flex justify-center items-center'>
                        <img className='w-24 rounded-full ' src="https://i.ibb.co/ngSwMTz/image-2.png" />
                        <h2 className='font-bold'>Isha Khan</h2>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>"Very Skilled, experienced and professional mechanic for servicing uncommon cars."</p>
                </div>
                <div className="p-4 m-4 shadow-lg shadow-gray-300/80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className='flex justify-center items-center'>
                        <img className='w-24 rounded-full ' src="https://i.ibb.co/rMy13gM/image-3.png" />
                        <h2 className='font-bold'>Jannatul Ferdous</h2>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p>"Excellent service, extremely well mannered as well as technically sound"</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;