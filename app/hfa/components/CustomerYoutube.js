function CustomerYoutube() {
    return (
        <div className="w-full max-w-3xl mx-auto ">
            <div className=" bg-red-500">
                <div className="md:w-10/12 mx-auto  px-3 mt-4">
                    <h1 className="text-center pb-3 pt-6 text-white font-bold font-noto text-4xl"> क्या कहते है कस्टमर्स ?</h1>
                </div>
            </div>

            <div className="mx-auto pt-4 md:py-5">
                <iframe className="mx-auto w-[350px] h-[250px] md:w-[650px] md:h-[350px]" src="https://www.youtube.com/embed/FTeZiPHqf_k?si=pWIfdVoXfMqPQa7X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default CustomerYoutube