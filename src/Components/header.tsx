import { useState } from 'react';
import { IoHome, IoHomeOutline } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { MdOutlineSchool, MdSchool, MdOutlineWorkHistory, MdWorkHistory } from "react-icons/md";

function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const menu = [
    {name: 'Home', icon: <IoHomeOutline size={30} />, hoverIcon: <IoHome size={30} />},
    {name: 'Education', icon: <MdOutlineSchool size={30} />, hoverIcon: <MdSchool size={30} />},
    {name: 'Experiences', icon: <MdOutlineWorkHistory size={30} />, hoverIcon: <MdWorkHistory size={30} />},
    {name: 'Skills', icon: <IoMdCode size={30} />, hoverIcon: <FaCode size={30} />},
  ]

  const handleClick = (name : string) => {
    const element = document.getElementById(name);
    if (element !== null) {
      let offset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top: offset, behavior: 'smooth'});
    }
  }

  return (
    <div className='flex h-[64px] items-center justify-center gap-16 w-screen bg-white 
      bg-opacity-40 backdrop-blur-lg backdrop-filter top-0 fixed pr-8 lg:pr-12'>
        {menu.map((item) => (
          <div 
            className='cursor-pointer' 
            onClick={() => handleClick(item.name)}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className={`absolute top-4 transition duration-300 ${hoveredItem === item.name ? 'opacity-0' : 'opacity-100'}`}>
              {item.icon}
            </div>
            <div className={`absolute top-4 transition duration-300 ${hoveredItem === item.name ? 'opacity-100' : 'opacity-0'}`}>
              {item.hoverIcon}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Header