import React from 'react'
import { MdOutlineModeNight } from "react-icons/md";
import { MdModeNight } from "react-icons/md";

function Header() {
  const menu = [
    {name: 'Home', id : 'Home'},
    {name: 'Education', id : 'Education'},
    {name: 'Experiences', id : 'Experiences'},
    {name: 'Skills', id : 'Skills'},
    {name: 'Contact', id : 'Contact'},
  ]
  const handleClick = (id : string) => {
    const element = document.getElementById(id);
    if (element !== null) {
      let offset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top: offset, behavior: 'smooth'});
    }
  }
  const [darkMode, isActive] = React.useState(false);
  return (
    <div className='flex items-center justify-center gap-16 w-screen bg-white bg-opacity-40 backdrop-blur-lg backdrop-filter 
      p-4 top-0 sticky'>
        {menu.map((item) => (
          <div className='cursor-pointer hover:underline dark:text-red' onClick={() => handleClick(item.id)}>
            <h2>{item.name}</h2>
          </div>
        ))}
      <button type="button" className='cursor-pointer hover:text-' onClick={() => isActive(!darkMode)}>
          {darkMode ? <MdModeNight size={22}/> : <MdOutlineModeNight size={22}/>}
      </button>
    </div>
  )
}

export default Header