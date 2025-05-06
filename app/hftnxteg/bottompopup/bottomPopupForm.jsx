import { useGlobalContext } from '@/app/statemanage/context';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const BottomPopupForm = () => {
    const { hours, minutes, remainingSeconds } = useGlobalContext();

    return (
        <div className='w-full bg-[#262525] py-1' onClick={() => window.location.href = "#form"}>
            <p className='text-center text-[1.2rem] m-0'>Discount End: <span className='text-[#e1c231]'>{`${hours}:${minutes}:${remainingSeconds}`}</span></p>
            <div className='flex justify-center items-center gap-2 text-white'>
                <BsArrowRightCircleFill className='arrow-3 commonArrow' />
                <a href='#form' className='text-center decoration-none border-0 rounded-lg pt-1  px-3 font-bold bg-[red]' >Pack With 50% OFF</a>
                <BsArrowLeftCircleFill className='arrow-4 commonArrow' />
            </div>
        </div>
    )
}
export default BottomPopupForm;