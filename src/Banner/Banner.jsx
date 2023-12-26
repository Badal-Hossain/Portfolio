import { FaArrowTurnDown } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img src="../../public/img/bannerimg/hero.jpg" alt="" className="bg-cover" />
                <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>
                <div className='absolute lg:top-52 left-32'>
                    <button className="btn text-xl outline-none border-none font-normal lg:mr-20 px-8 text-black" style={{backgroundColor:'#E0874B'}}>Hellow, I am Mary Addison</button>
                    <p className="text-8xl mt-7 text-white">Exceptional Web <br /> <p style={{color:'#E0874B'}}>Developer</p></p>
                    <button className="flex text-2xl mt-4" style={{color:'#E0874B'}}>Download CV <FaArrowTurnDown className="ml-2 mt-1"></FaArrowTurnDown></button>
                    <hr className="w-44" style={{color:'#E0874B'}} />
                </div>
            </div>
        </div>
    );
};
export default Banner;