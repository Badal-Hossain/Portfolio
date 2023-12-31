import './Skills.css'
const Skills = () => {
    return (
        <div>
            <div className="grid gap-14 grid-cols-7 py-10 px-20 bg-black text-white">
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
                    <div className='flex justify-between'>
                        <div className='skillBox'>
                            <img className='w-10 reactIcon' src="../../public/img/skill/React-icon.svg.png" alt="" />
                            <h2 className='text-2xl'>ReactJS</h2>
                            <div className='flex gap-4 mt-4'>
                                <div className='skillBar'>
                                    <div className='skillPer' style={{maxWidth:'90%'}}></div>
                                </div>
                                <div>90%</div>
                            </div>
                        </div>
                        <div className='skillBox'>
                            <img className='w-10 reactIcon' src="../../public/img/skill/React-icon.svg.png" alt="" />
                            <h2 className='text-2xl'>JavaScript</h2>
                            <div className='flex gap-4 mt-4'>
                                <div className='skillBar'>
                                    <div className='skillPer' style={{maxWidth:'80%'}}></div>
                                </div>
                                <div>80%</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className='skillBox'>
                            <img className='w-10 reactIcon' src="../../public/img/skill/React-icon.svg.png" alt="" />
                            <h2 className='text-2xl'>Tailwind</h2>
                            <div className='flex gap-4 mt-4'>
                                <div className='skillBar'>
                                    <div className='skillPer' style={{maxWidth:'100%'}}></div>
                                </div>
                                <div>100%</div>
                            </div>
                        </div>
                        <div className='skillBox'>
                            <img className='w-10 reactIcon' src="../../public/img/skill/React-icon.svg.png" alt="" />
                            <h2 className='text-2xl'>Bootstrap</h2>
                            <div className='flex gap-4 mt-4'>
                                <div className='skillBar'>
                                    <div className='skillPer' style={{maxWidth:'80%'}}></div>
                                </div>
                                <div>80%</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <div className='skillBox'>
                            <img className='w-10 reactIcon' src="../../public/img/skill/React-icon.svg.png" alt="" />
                            <h2 className='text-2xl'>CSS</h2>
                            <div className='flex gap-4 mt-4'>
                                <div className='skillBar'>
                                    <div className='skillPer' style={{maxWidth:'70%'}}></div>
                                </div>
                                <div>70%</div>
                            </div>
                        </div>
                        <div className='skillBox'>
                            <img className='w-10 reactIcon' src="../../public/img/skill/React-icon.svg.png" alt="" />
                            <h2 className='text-2xl'>HTML</h2>
                            <div className='flex gap-4 mt-4'>
                                <div className='skillBar'>
                                    <div className='skillPer' style={{maxWidth:'80%'}}></div>
                                </div>
                                <div>80%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
