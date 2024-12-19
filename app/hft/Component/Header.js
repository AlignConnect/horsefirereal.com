// import dynamic from "next/dynamic";
// const ImageAlert = dynamic(() => import('../PowerComponent/ImageAlert'), {
//     loading: () => <p>load</p>
// });
const Header = () => {
    return (
        <section className="bg-black w-full md:w-[750px] max-h-full min-h-[200px] mx-auto text-white">
            {/* <ImageAlert handleimage={"/main/hft_images/background_1.jpg"} /> */}
            <img src={'/main/hft_images/background_1.webp'} className="md:w-[768px] max-h-full min-h-[230px] md:min-h-[500px]" alt="noimage" fetchPriority="high" />

        </section>
    )
}

export default Header;