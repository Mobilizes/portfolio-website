// import React from 'react'
// import { FaGithub } from "react-icons/fa";

function Intro() {
  return (
    <main className='flex h-[calc(100vh-57px)] items-center' id="Home">
    <div className='flex flex-col items-center justify-center gap-4 p-4 lg:w-5/6 '>
      <div>
        <h1 className='text-6xl font-bold '>Hello, I'm Fernando</h1>
        <p className='text-lg '>I'm an university student in ITS aspiring to be a software engineer.</p>
      </div>
    </div> 
    <div className='w-1/2'>
      <img src='halo.JPG' alt='profile' className='w-1/2 h-1/1.5 max-lg:hidden'/>
    </div>
    </main>
  )
}

export default Intro