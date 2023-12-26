/* eslint-disable react/no-unescaped-entities */
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div style={{backgroundColor:'#EAEFFD'}}>
            <div className='marque pt-8 text-4xl' style={{color:'#E0874B'}}>
                <marquee direction="">Let's work * web design with html * css * bootstrap or tailwind * JavaScript * ReactJS</marquee>
            </div>
            <div className="text-center py-16 text-2xl">
                <i>I AM WEB DEVELOPER</i>
                <div className="loader mx-auto"></div>
            </div>
            <div className="text-center">
                <h3 className="text-6xl">Unveiling The Art Of Uncommon <br /> Skill Development</h3>
            </div>
            <div className="grid grid-cols-3 gap-5 px-20 mt-16">
                <div className="col-span-2 mt-6">
                    <div className='text-2xl'>About Me</div>
                    <div className='about'></div>
                    <h3 className='text-5xl py-4 font-semibold'>Professional Web Developer</h3>
                    <p className='text-md mt-2'>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt.</p>
                    <div className='grid grid-cols-2 gap-10 mt-6'>
                        <div className='col-span-1'>
                            <ul className='text-xl'>
                                <li className='mb-3 justify-between'>Name
                                    <span className='ml-16 mr-4'> : </span>
                                    <span className='text-base'>Mari Addison</span>
                                </li>
                                <li className='mb-3'>Nationality
                                    <span className='mx-4'> : </span>
                                    <span className='text-base'>Bangladesh</span>
                                </li>
                                <li className='mb-3'>Phone
                                    <span className='ml-16 mr-4'>: </span>
                                    <span className='text-base'>123456789</span>
                                </li>
                                <li className='mb-3'>Email
                                    <span className='ml-16 mr-4'> : </span>
                                    <span className='text-base'>example@gmail.com</span>
                                </li>
                                <li className='mb-3'>Freelance 
                                    <span className='ml-8 mr-4'>: </span>
                                    <span className='text-base'>Available</span>
                                </li>
                                <li className='mb-3'>Skype 
                                    <span className='ml-16 mr-4'>: </span>
                                    <span className='text-base'>example123</span>
                                </li>
                                <li>Language 
                                    <span className='ml-8 mr-4'>: </span>
                                    <span className='text-base'>English, Bengali, Hindi</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className='border mb-4 rounded-md border-black w-1/2 mx-auto px-4 py-4'>
                                <h5 className='text-2xl font-semibold'>4.5</h5>
                                <p>Rating</p>
                            </div>
                            <div className='border mb-4 rounded-md border-black w-1/2 mx-auto px-4 py-4'>
                                <h5 className='text-2xl font-semibold'>26+</h5>
                                <p>Clent</p>
                            </div>
                            <div className='border mb-4 rounded-md border-black w-1/2 mx-auto px-4 py-4'>
                                <h5 className='text-2xl font-semibold'>200+</h5>
                                <p>Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../../public/img/bannerimg/web designer.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;