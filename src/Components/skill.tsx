

function Skills() {
  const list = [
    {name: 'Python', icon: 'python'},
    {name: 'C++', icon: 'cplusplus'},
    {name: 'C', icon: 'c'},
    {name: 'JavaScript', icon: 'javascript'},
    {name: 'React', icon: 'react'},
    {name: 'HTML', icon: 'html5'},
    {name: 'CSS', icon: 'css3'},
    {name: 'Tailwind CSS', icon: 'tailwindcss'},
    {name: 'Node.js', icon: 'nodejs'},
    {name: 'MySQL', icon: 'mysql'},
    {name: 'Git', icon: 'git'},
    {name: 'GitHub', icon: 'github'},
    {name: 'Docker', icon: 'docker'},
    {name: 'Jira', icon: 'jira'},
    {name: 'Godot Engine', icon: 'godot'},
  ]
  return (
    <div>
      <h2 className='text-5xl font-bold mt-24 mb-8 text-center' id='Skills'>Skills</h2>
      <div className='grid grid-cols-4 gap-4'>
        {list.map((item) => (
          <div className='flex flex-col items-center gap-1'>
            <div className='w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center hover:animate-spin hover:bg-white duration-150 max-md:w-12 max-md:h-12'>
              <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.icon}/${item.icon}-original.svg`} alt={item.name} className='w-12 h-12'/>
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills