import './Experience.css'
const Experience = () => {
    return (
        <div className="expPage grid gap-14 grid-cols-7 pt-10 px-20 text-white pb-10">
            <div className="col-span-3">
                <h2 className='text-2xl text-black'>My Job Info</h2>
                <div className="expHr"></div>
                <div className='w-full mt-4'>
                    <img src="../../public/img/info/markus-winkler-7iSEHWsxPLw-unsplash.jpg" alt="" />
                </div>
            </div>
            <div className='col-span-4'>
                <h2 className='text-5xl mt-8 font-semibold text-black'>My Experience</h2>
                <p className='py-6 opacity-60 text-lg text-black'>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt.</p>
                <div className='flex text-black gap-4'>
                    <div className='expBox'>
                        <p>2016-2018</p>
                        <h2 className='text-3xl my-2'>Web Design</h2>
                        <p>Co Founder</p>
                    </div>
                    <div className='expBox'>
                        <p>2018-2020</p>
                        <h2 className='text-3xl my-2'>Web Development</h2>
                        <p>Co Founder</p>
                    </div>
                </div>
                <div className='flex text-black gap-4 mt-4'>
                    <div className='expBox'>
                        <p>2020-2022</p>
                        <h2 className='text-3xl my-2'>Lead Product</h2>
                        <p>LinkedIn</p>
                    </div>
                    <div className='expBox'>
                        <p>2022-Current</p>
                        <h2 className='text-3xl my-2'>Front-end Design</h2>
                        <p>Co Founder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;