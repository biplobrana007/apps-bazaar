import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center min-h-screen bg-[#f5f5f5] items-center'>
            <span className="loading text-primary loading-spinner  loading-xl"></span>
        </div>
    );
};

export default LoadingSpinner;