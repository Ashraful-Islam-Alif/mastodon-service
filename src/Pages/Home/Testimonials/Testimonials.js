import React from 'react';

const Testimonials = () => {
    return (


        <div id='testimonials' className='container mx-auto py-32 px-8'>
            <h2 className='text-[#006a4e] text-center text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Testimonials</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4 '>

                <div className=" p-4 m-4 shadow-gray-300/80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-24 rounded-full ' src="https://mastodon-tech.github.io/Mastodonwash-v1.0.1/assets/img/testimonials/Tanvir.jpeg" />
                        <h2 className=' font-bold py-4'>Shamsil Arefin</h2>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                    </div>
                    <p className='italic '> "A much-needed service during this hard time when going out is mostly a desire. I am satisfied with the car wash service and their well trained and well mannered workforce."</p>
                </div>
                <div className="p-4 m-4 shadow-gray-300/80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-24 rounded-full ' src="https://mastodon-tech.github.io/Mastodonwash-v1.0.1/assets/img/testimonials/Shamsil.jpeg" />
                        <h2 className=' font-bold py-4'>Isha Khan</h2>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                    </div>
                    <p className='italic '>"I heard about Mastodon from my colleagues. I was surprised how some young and energetic entrepreneurs are transforming Automobile Industry using technology. Easy to order, easier to get delivered."</p>
                </div>
                <div className="p-4 m-4 shadow-gray-300/80 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 bg-gray-100 rounded-xl shadow-2xl">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='w-24 rounded-full ' src="https://mastodon-tech.github.io/Mastodonwash-v1.0.1/assets/img/testimonials/nasim.jpeg" />
                        <h2 className='font-bold py-4'>M. A. Nasim</h2>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#99ca3fc4]" />
                    </div>
                    <p className='italic '>"They are professional, they are friendly. Something you don’t see everywhere."</p>
                </div>

            </div>
        </div>

    );
};

export default Testimonials;