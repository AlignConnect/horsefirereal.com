import React, { useState } from "react";
import Reviewdata from "../../reviews.json";
import dayjs from "dayjs";
import Image from "next/image";

const Reviews = () => {
    const [current, setCurent] = useState(5);

    const reviewHandler = () => {
        setCurent(current + 3);
    };

    const formatDate = (index) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - index);
        return currentDate.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const newData = Reviewdata.map((item, index) => ({
        ...item,
        starimg: "/common_images/ratting.png",
        img: "/common_images/verify.svg",
        date: formatDate(index), // Add the date property based on the index
    }));



    return (
        <div className="">

            <div className=" bg-[blue]">
                <div className="md:w-10/12 mx-auto px-4 ">
                    <h1 className="text-center pb-3 pt-6  font-bold font-noto text-3xl md:text-4xl text-white leading-wide">Horse Fire Tablet पर कस्टमर की राय</h1>
                </div>
            </div>
            <div className="px-3 max-w-5xl mx-auto">
                <ul className={`space-y-3 fontPoppins pt-4`}>
                    {newData.slice(0, current).map((el, i) => {

                        return (
                            <li
                                key={i}
                                className="border p-3 rounded-lg shadow-sm flex flex-col "
                            >
                                <div className="flex items-center">
                                    <div className="w-16 rounded-full overflow-hidden">
                                        <Image
                                            src={el.profile_photo}
                                            sizes="100vw"
                                            alt="pic"
                                            className="w-full h-full "
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="flex flex-col ml-2">
                                        <Image src={el.starimg} width={80} height={50} sizes="100vw" alt="pic" />
                                        <h1 className="text-zinc-900 text-xl md:text-3xl font-semibold ">
                                            {el.name.charAt(0).toUpperCase() + el.name.slice(1)}
                                        </h1>
                                    </div>
                                </div>
                                <div className="ml-2 mt-2">
                                    <p className="text-[1rem] md:text-xl text-justify"> {el.comment} </p>
                                    <small className="text-[1rem] text-red-500 mt-2">{dayjs().subtract(i + 6, 'days').format("DD MMM YYYY")}</small>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex justify-center items-center py-4">
                    <button
                        onClick={reviewHandler}
                        className={`bg-slate-600  fontPoppins text-white flex justify-center hover:bg-slate-800 duration-200 items-center text-xl w-80 py-4 rounded-full`}
                    >
                        LOAD MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;