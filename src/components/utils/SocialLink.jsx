import React from 'react';

const SocialLink = ({ icon }) => {
    return (
        <>
            <img 
                src={icon}
                alt="icon/social"
                className='w-7 h-7 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-100 text-slate-100'
            />
        </>
    )
}

export default SocialLink