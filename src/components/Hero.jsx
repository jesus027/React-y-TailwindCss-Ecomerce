import React from 'react';
import Clips from './utils/Clips';
import SocialLinks from './utils/SocialLink'


const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
    //console.log(heroapi)
    return (
        <>
            <div className='relative h-auto w-auto flex flex-col'>
                <div className='bg-theme clip-path h-[85vh] lg:h[75vh] md:h-[65v] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
                <div className='relative opacity-100 z-20 grid items-center justify-items-center store-container'>
                    <div className='grid items-center justify-items-center mt-16 md:mt-20'>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
                        <button type='button' className='button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5'>{btntext}</button>
                        <div className='grid items-center gap-5 md:gap-3 absolute top-[30vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
                            {videos?.map((val, i) => (
                                <Clips
                                    key={i}
                                    imgsrc={val.imgsrc}
                                    clip={val.clip}
                                />
                            ))}
                        </div>
                        <div className='grid items-center absolute top-[33vh] lg:top[27vh] right-0 gap-3'>
                            {sociallinks?.map((val, i) => (
                                <SocialLinks
                                    key={i}
                                    icon={val.icon}
                                />
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <img 
                            src={img}
                            alt='hero-img/img'
                            className='w-auto h-[45vh] lg:h[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme rounded-3xl' 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero