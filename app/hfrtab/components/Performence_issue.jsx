import React from 'react'

const Performence_issue = () => {

    const performance_issue_points = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:py-10 py-4' key={key}>
                <div className="sm:w-44 sm:h-44 h-32 w-32 overflow-hidden rounded-full mx-auto">
                    <img src={e.gif} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>
                <div className='fontNoto pt-3  text-xl font-bold text-center text-white'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }

    return (
        <div className='performance_issue_bg'>

            <div className="w-full sm:max-w-6xl mx-auto sm:py-7 py-3">



                <div className="grid sm:grid-cols-4 grid-cols-2 justify-center items-center">
                    {
                        performance_issue_points([
                            {
                                gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0d1137a8-d2ce-4d4c-2826-25a8d0222100/public",
                                title: "लिंग छोटा, <br/>और ढीला होना "
                            },
                            {
                                gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5da24eb0-9d1c-471a-5bb3-3ac83c543f00/public",
                                title: "जोश, और <br/>स्टेमिना की कमी"
                            },
                            {
                                gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d363663b-695d-45cc-8c7e-6a29eaed5800/public",
                                title: "सेक्स के दौरान <br/>जल्दी झड़ जाना"
                            },
                            {
                                gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e14aff11-bea1-4aef-daf4-cff6232b4200/public",
                                title: "फर्स्ट राउंड के बाद <br/>लिंग खड़ा न होना "
                            }
                        ])
                    }
                </div>


            </div>
        </div>

    )
}

export default Performence_issue