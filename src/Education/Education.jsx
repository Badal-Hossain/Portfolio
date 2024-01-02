import './Education.css'
const Education = () => {
    return (
        <div className='eduPage px-20 pt-6'>
            <div>
                <h2 className='mt-4 text-3xl'>My Education</h2>
                <div className='eduHr'></div>
            </div>
            <div className='flex mb-6'>
                <div className="educationBox">
                    <h2 className='text-xl font-semibold'>Programming Course</h2>
                    <p className='my-3'>UK University</p>
                    <div className='boxHr'></div>
                    <p>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt. solution amet consectetur, adipisicing amet consectetur</p>
                </div>
                <div className='my-auto pl-6 text-3xl font-semibold' style={{color:'#E0874B'}}>2010-2012</div>
            </div>
            <div className='grid grid-cols-6 mb-6'>
                <div className='col-span-2'></div>
                <div className='col-span-4'>
                    <div className='flex'>
                        <div className="educationBox">
                            <h2 className='text-xl font-semibold'>Web Design Course</h2>
                            <p className='my-3'>UK University</p>
                            <div className='boxHr'></div>
                            <p>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt. solution amet consectetur, adipisicing amet consectetur</p>
                        </div>
                        <div className='my-auto pl-6 text-3xl font-semibold' style={{color:'#E0874B'}}>2013-2016</div>
                    </div>
                </div>
            </div>
            <div className='flex mb-6'>
                <div className="educationBox">
                    <h2 className='text-xl font-semibold'>Graphic Design Course</h2>
                    <p className='my-3'>UK University</p>
                    <div className='boxHr'></div>
                    <p>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt. solution amet consectetur, adipisicing amet consectetur</p>
                </div>
                <div className='my-auto pl-6 text-3xl font-semibold' style={{color:'#E0874B'}}>2017-2018</div>
            </div>
            <div className='grid grid-cols-6'>
                <div className='col-span-2'></div>
                <div className='col-span-4'>
                    <div className='flex'>
                        <div className="educationBox">
                            <h2 className='text-xl font-semibold'>Web Development</h2>
                            <p className='my-3'>UK University</p>
                            <div className='boxHr'></div>
                            <p>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt. solution amet consectetur, adipisicing amet consectetur</p>
                        </div>
                        <div className='my-auto pl-6 text-3xl font-semibold' style={{color:'#E0874B'}}>2020-Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;