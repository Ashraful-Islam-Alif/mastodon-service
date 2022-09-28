import React from 'react';

const FAQ = () => {
    return (
        <div className='container mx-auto py-32 px-64'>
            <h2 className='text-[#e46161] text-center text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>FREQUENTLY ASKED QUESTIONS</h2>
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 rounded-box m-4">
                <div className="collapse-title text-xl font-medium text-[#f1b963]">
                    How do I order?
                </div>
                <div className="collapse-content">
                    <p className='text-[#cbf078]'>Go at the top right side of our website, www.mastodonbd.com and schedule your wash filling the information or download our application Mastodon Wash</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-100 rounded-box m-4">
                <div className="collapse-title text-xl font-medium text-[#f1b963]">
                    What do I need after scheduling a wash?
                </div>
                <div className="collapse-content">
                    <p className='text-[#cbf078]'>We expect you’ll provide water & electricity.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-100 rounded-box m-4">
                <div className="collapse-title text-xl font-medium text-[#f1b963]">
                    Where is the “Custom” & “ADDs ON” section of the service?
                </div>
                <div className="collapse-content">
                    <p className='text-[#cbf078]'>These features are only accessible by our smartphone application- Mastodon Wash.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-100 rounded-box m-4">
                <div className="collapse-title text-xl font-medium text-[#f1b963]">
                    What if I do not have water and Electricity?
                </div>
                <div className="collapse-content">
                    <p className='text-[#cbf078]'>We expect you’ll provide water & electricity.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border bg-base-100 rounded-box m-4">
                <div className="collapse-title text-xl font-medium text-[#f1b963]">
                    How do I pay?
                </div>
                <div className="collapse-content">
                    <p className='text-[#cbf078]'>These features are only accessible by our smartphone application or also you can give cash after the service is done.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;