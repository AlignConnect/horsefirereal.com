import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

const Sec1 = dynamic(() => import('./Sec1'), {
    loading: () => <p>loader</p>
});

const Sec2 = dynamic(() => import('./Sec2'), {
    loading: () => <p>loader</p>
});

const Sec3 = dynamic(() => import('./Sec3'), {
    loading: () => <p>loader</p>
});

const Sec4 = dynamic(() => import('./Sec4'), {
    loading: () => <p>loader</p>
});


const Main = () => {




    return (
        <div>

            <div className="relative  ">
                <div className="relative z-10 py-8 sm:py-10 text-center">

                    <Sec1 />

                    <Sec2 />

                    <Sec3 />

                    <Sec4 />


                </div>

                <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f8eafa25-dd9f-4e8f-14c1-139a55fcf700/public" fill fetchPriority='high' alt='pic' className='bg-black' loading='lazy' />
            </div>
        </div>
    )
}

export default Main