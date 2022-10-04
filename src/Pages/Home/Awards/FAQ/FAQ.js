import React from 'react';

const FAQ = () => {
    return (
        <div className='container mx-auto py-32 md:px-64'>
            <h2 className='text-[#006a4e] text-center text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold py-8'>FREQUENTLY ASKED QUESTIONS</h2>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-200 rounded-box m-4">
                <div className="collapse-title text-xs md:text-lg font-medium ">
                    How do I order?
                </div>
                <div tabIndex={0} className="collapse-content ">
                    <p className=' text-xs md:text-md '>Go at the top right side of our website, www.mastodonbd.com and schedule your wash filling the information or download our application Mastodon Wash</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-200 rounded-box m-4">
                <div className="collapse-title text-xs md:text-lg font-medium ">
                    What do I need after scheduling a wash?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p className=' text-xs md:text-md '>We expect you’ll provide water & electricity.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-200 rounded-box m-4">
                <div className="collapse-title text-xs md:text-lg font-medium ">
                    Where is the “Custom” & “ADDs ON” section of the service?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p className=' text-xs md:text-md '>These features are only accessible by our smartphone application- Mastodon Wash.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-200 rounded-box m-4">
                <div className="collapse-title text-xs md:text-lg font-medium ">
                    What if I do not have water and Electricity?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p className=' text-xs md:text-md '>We expect you’ll provide water & electricity.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-200 rounded-box m-4">
                <div className="collapse-title text-xs md:text-lg font-medium ">
                    How do I pay?
                </div>
                <div tabIndex={0} className="collapse-content">
                    <p className=' text-xs md:text-md '>These features are only accessible by our smartphone application or also you can give cash after the service is done.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;