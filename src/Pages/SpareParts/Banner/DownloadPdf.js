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
        <div>
            <center>
                <h2 className='text-[#006a4e] text-center text-2xl sm:text-4xl lg:text-6xl font-bold py-8'>Become a Mastodon Partner</h2>
                <button className='text-2xl font-bold' onClick={onButtonClick}>
                    Download PDF
                </button>
            </center>
        </div>
    );
};

export default DownloadPdf;