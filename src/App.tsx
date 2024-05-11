import './App.css'
import Header from './Components/header.tsx'
import Intro from './Components/intro.tsx'
import Education from './Components/education.tsx'
import Experience from './Components/experience.tsx'
import Skill from './Components/skill.tsx'
import Footer from './Components/footer.tsx'

function App() {
  return (
    <>
      <div className='bg-[url(/public/background.jpg)] bg-cover bg-repeat h-full overflow-x-hidden'>
        <Header/>
        <div className='w-4/5 mx-auto'>
          <Intro/>
          <Education/>
          <Experience/>
          <Skill/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
