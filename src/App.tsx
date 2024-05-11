import './App.css'
import Header from './Components/header.tsx'
import Intro from './Components/intro.tsx'
import Education from './Components/education.tsx'
import Experience from './Components/experience.tsx'

function App() {
  return (
    <>
      <div className='bg-[url(background.jpg)] bg-cover'>
        <Header/>
        <div className='w-4/5 mx-auto'>
          <Intro/>
          <Education/>
          <Experience/>
        </div>
      </div>
    </>
  )
}

export default App
