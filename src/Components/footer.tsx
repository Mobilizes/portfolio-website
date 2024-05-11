import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className='text-center text-black text-sm p-2 mt-24 bg-purple-00 bg-opacity-30 backdrop-blur-lg backdrop-filter'>
        <div className='flex justify-center mb-4 gap-2'>
          <a href='https://github.com/Mobilizes' className='text-3xl text-black hover:text-blue-400 duration-300'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/fernando-lu-247025256/' className='text-3xl text-black hover:text-blue-400 duration-300'>
            <AiFillLinkedin />
          </a>
          <a href='https://wa.me/6289510884742' className='text-3xl text-black hover:text-blue-400 duration-300'>
            <IoLogoWhatsapp />
          </a>
        </div>
        <p>© 2024 by <a href='' className='hover:underline'>Fernando</a></p>
      </div>
    </>
  );
}

export default Footer