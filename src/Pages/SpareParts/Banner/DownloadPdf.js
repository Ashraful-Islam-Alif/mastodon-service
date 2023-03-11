import React from 'react';

const DownloadPdf = () => {
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='container mx-auto py-24 px-8'>
            <h2 className='text-[#006a4e]  text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Become a mastodon Partner</h2>
            <button className='text-2xl font-bold' onClick={onButtonClick}>
                Download PDF
            </button>
        </div>
    );
};

export default DownloadPdf;