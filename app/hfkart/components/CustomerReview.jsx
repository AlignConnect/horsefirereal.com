"use client";
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import reviewsData from '../../reviews.json';
import dynamic from 'next/dynamic';



const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});




const CustomerReview = () => {

    const [Reviews] = useState(reviewsData);
    const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);

    const showMore = () => {
        if (numberOfitemsShown + 3 <= Reviews.length) {
            setNumberOfItemsToShown(numberOfitemsShown + 3);
        } else {
            setNumberOfItemsToShown(Reviews.length);
        }
    };


    const itemsToShow = useMemo(() => {
        return Reviews
            .slice(0, numberOfitemsShown).map((e, key) => {

                let ey = 0;

                switch (key) {
                    case 0:
                        ey = 1
                        break;
                    case 1:
                        ey = 3
                        break;
                    case 2:
                        ey = 6
                        break;
                    case 3:
                        ey = 9
                        break;
                    case 4:
                        ey = 11
                        break;
                    case 5:
                        ey = 15
                        break;
                    case 6:
                        ey = 18
                        break;
                    case 7:
                        ey = 20
                        break;
                    case 8:
                        ey = 24
                        break;
                    case 9:
                        ey = 25;
                        break;
                    case 10:
                        ey = 27;
                        break;

                    default:
                        break;
                }

                return <div key={key}>
                    <div className="mx-2 my-5 p-2 rounded-md" style={{ boxShadow: "-1px 0px 5px 0px black" }} key={key}>
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>

                            <div className="w-[50px] h-[50px] ">
                                <img src={e.profile_photo} alt="pic" className='max-w-[50px] min-w-[40px] w-[50px] max-h-[50px] min-h-[40px] h-[50px] rounded-full' decoding='async' fetchPriority='low' loading='lazy' />
                            </div>
                            <div>
                                <h5 className='mb-0 text-center align-center text-xl font-bold'>{e.name}&nbsp;<img src="/common_images/verify.svg" className='w-[18px] h-[18px] inline' alt="pic" loading='lazy' fetchPriority='low' decoding='async'
                                    loader={<p>wait</p>} /></h5>
                                <p className='m-0 text-start'>
                                    <span className="ms-1 text-[red] text-lg" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </p>
                            </div>
                        </div>
                        <p className='text-start mt-0 text-[1.05rem]'>{e.comment}</p>
                        <div>
                            {

                                key === 1 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/170565a4-8017-4736-919f-021d00724400/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }

                            {
                                key === 3 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d9150399-df58-428c-f3ac-43f624de2500/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }

                            {
                                key === 10 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cadcb4e9-4482-46f0-ad6d-76d5247d8b00/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }

                            {
                                key === 7 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5e3a89b-42a0-4717-20c8-49c5e1a5bb00/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }
                        </div>

                    </div>

                    {key % 3 === 0 && <div className="-my-3 -mx-3">
                        <FlipAmazon />
                    </div>}
                </div>
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <div className='w-full'>
            <div className='w-full bg-gray-700 '>


                <section className='w-full bg-inherit py-3 md:py-7'>
                    <div className='md:w-[47rem] mx-auto w-full bg-white rounded-xl  overflow-hidden'>
                        <div className="px-2 pt-4 w-full">
                            <div className='text-2xl md:text-4xl font-bold mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customers Say</span></div>
                            <div className="text-center">
                                <div className="" >{itemsToShow.length ? itemsToShow : "Loading..."}
                                    {numberOfitemsShown >= reviewsData.length ? (
                                        ""
                                    ) : (
                                        <button className='text-white font-bold text-xl md:text-2xl px-3 my-3 md:px-10 py-1 md:py-2 bg-[red] rounded-md' onClick={showMore}>Show more</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>


            </div>

        </div>
    )
}
export default CustomerReview; 