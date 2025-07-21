import React from 'react'
import avatarImg from "../../assets/girl.png"
import TextChange from '../TextChange'

const Home = () => {
    return (
        
            <div className='py-20 md:py-32 lg:pt-40 text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20'>
                <div className=' w-full md:w-1/2 '>
                    <h1 className='text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter'>
                        <TextChange />
                    </h1>
                    <p className='text-sm md:text-2xl tracking right pt-5 text-zinc-400 pb-5'>I'm a passionate MERN developer with a strong interest in backend technologies. </p>
                    <p className='text-sm md:text-2xl tracking right pt-2 text-zinc-400 pb-5 justify-around'>TeamWork • Team Collaboration • Problem Solving</p>
                    <a href="#Footer">
                        <button className='mt-5  md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button>
                    </a>
                    
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={avatarImg} alt="Avatar" className="w-full sm:w-52 md:w-64 lg:w-72 xl:w-90 animate-float hover:animate-bounce" />
                </div>


            </div>
        
    )
}

export default Home