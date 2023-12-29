import './Skills.css'
const Skills = () => {
    return (
        <div>
            <div className="grid gap-14 grid-cols-7 pt-10 px-20 bg-black text-white">
                <div className="col-span-3">
                    <h2 className='text-2xl'>Take A Look</h2>
                    <div className="skillHr"></div>
                    <div className='w-full'>
                        <img src="../../public/img/skill/10165378.png" alt="" />
                    </div>
                </div>
                <div className="col-span-4">
                    <h2 className='text-5xl mt-8 font-semibold'>My Skills</h2>
                    <p className='py-6 opacity-50 text-lg'>Professional Problems solution amet consectetur, adipisicing amet consectetur, adipisicing elit. Sunt, deserunt dolorum. Quo quaerat, itaque porro totam molestias repellat ex animi maiores illum magni incidunt.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
