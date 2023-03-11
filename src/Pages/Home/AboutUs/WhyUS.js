import React from 'react';

const WhyUS = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 my-20'>
                <div >
                    <iframe
                        width="100%" height="500" src="https://www.youtube.com/embed/CQS9SEAkj1k"
                        title="mastodon Wash" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>

                    </iframe>
                </div>
                <div className='bg-white grid items-center p-8'>
                    <h5>About Our Company</h5>
                    <h2 className=' text-[#006a4e] text-xl sm:text-2xl lg:text-4xl font-bold py-2'>Why Choose Us</h2>
                    <div class="grid grid-rows-3 grid-flow-col gap-2 ">
                        <div class="row-span-3 grid items-center "><h2 className='bg-[#006a4e] text-white hover:bg-[#94ca21cf] rounded-full px-4 py-2 m-2 w-16 h-16 font-bold grid items-center text-2xl'>01</h2></div>
                        <div class="col-span-2 ..."><h2 className='font-bold text-2xl'>Get the best price</h2></div>
                        <div class="row-span-2 col-span-2 ..."><p>Intrinsicly fashion enterprise manuftured products after open source e-service engage transparent channels.</p></div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-2 ">
                        <div class="row-span-3 grid items-center "><h2 className='bg-[#006a4e] text-white hover:bg-[#94ca21cf] rounded-full px-4 py-2 m-2 w-16 h-16 font-bold grid items-center text-2xl'>02</h2></div>
                        <div class="col-span-2 ..."><h2 className='font-bold text-2xl'>Get it delivered,at your door</h2></div>
                        <div class="row-span-2 col-span-2 ..."><p>Intrinsicly fashion enterprise manuftured products after open source e-service engage transparent channels.</p></div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-2 ">
                        <div class="row-span-3 grid items-center "><h2 className='bg-[#006a4e] text-white hover:bg-[#94ca21cf] rounded-full px-4 py-2 m-2 w-16 h-16 font-bold grid items-center text-2xl'>03</h2></div>
                        <div class="col-span-2 ..."><h2 className='font-bold text-2xl'>Monitor Everything</h2></div>
                        <div class="row-span-2 col-span-2 ..."><p>Intrinsicly fashion enterprise manuftured products after open source e-service engage transparent channels.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUS;