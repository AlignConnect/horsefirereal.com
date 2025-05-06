"use client";
import { useState } from 'react';
import { hft } from '../PowerComponent/HftClass';

const data = [
    {
        no: 1,
        first: "छोटा लिंग",
        firstimg: '/main/hft_images/11.gif',
        second: "बढ़ जाता है",
        secondimg: '/main/hft_images/111.gif'
    },
    {
        no: 2,
        first: "ढीला लिंग",
        firstimg: '/main/hft_images/22.gif',
        second: "कड़क होता है",
        secondimg: '/main/hft_images/222.gif'
    },
    {
        no: 3,
        first: "शीघ्रपतन",
        firstimg: '/main/hft_images/33.gif',
        second: "45+ मिनट सेक्स",
        secondimg: '/main/hft_images/333.gif'
    },
    {
        no: 4,
        first: "कम स्टैमिना  ",
        firstimg: '/main/hft_images/44.gif',
        second: "हाई स्टैमिना",
        secondimg: '/main/hft_images/444.gif'
    },
    {
        no: 5,
        first: "दुखी पार्टनर ",
        firstimg: '/main/hft_images/55.gif',
        second: "संतुष्ट पार्टनर",
        secondimg: '/main/hft_images/555.gif'
    },
];



const CarouselM = () => {

    const [sli, setsli] = useState(data[0]);


    setInterval(() => {
        sli?.no === 1 && setsli(data[1]);
        sli?.no === 2 && setsli(data[2]);
        sli?.no === 3 && setsli(data[3]);
        sli?.no === 4 && setsli(data[4]);
        sli?.no === 5 && setsli(data[0]);
    }, 4000);


    return (
        <div className='w-full md:w-[768px] mx-auto text-center'>

            <h3 className='text-xl'> <span className='knight' >Horsefire Tablet</span> लेने के बाद !!</h3>

            <div className='sizeof'>
                <div className='card_display'>

                    <div className='animaone'>
                        {
                            hft.cardgif(sli?.first, sli?.firstimg, "bold")
                        }
                    </div>


                    <div className='animatwo'>
                        {
                            hft.cardgif(sli?.second, sli?.secondimg, "bold")
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarouselM;