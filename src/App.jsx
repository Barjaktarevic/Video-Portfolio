import { useState } from 'react';

import YouTube from 'react-youtube';
import { BsSun, BsMoonFill } from 'react-icons/bs'

const playerVars = { autoplay: 1 }

const opts = {
  height: '580px',
  width: '850px',
  playerVars
};

function App() {
  const [lightMode, setLightMode] = useState(false)

  const handleClick = () => {
    setLightMode(prevMode => !prevMode)
  }

  const commonClasses = "h-screen w-screen flex flex-col items-center mx-auto overflow-x-hidden overflow-y-hidden bg-gradient-to-b transition duration-200"

  return (
    <div className={!lightMode ? "from-slate-800 to-sky-700 " + commonClasses : " from-sky-200 to-emerald-200 " + commonClasses}>

      <h1 className={!lightMode ? 'text-center text-8xl my-2 text-slate-100 font-mono font-bold text-shadowed uppercase' : 'text-center text-8xl my-2 text-amber-500 font-mono font-bold text-shadowed uppercase'}>Introducing Me</h1>

      <YouTube videoId="VVRskhA2rug" opts={opts} className={!lightMode ? "mx-auto lg:block border-4 rounded-lg hover:opacity-90 border-sky-200" : "mx-auto lg:block border-4 rounded-lg hover:opacity-90 border-orange-400"} />
      {!lightMode && <BsSun className='absolute top-5 right-5 h-10 w-10 text-white hover:cursor-pointer hover:text-yellow-500 transition duration-200' onClick={handleClick} />}
      {lightMode && <BsMoonFill className='absolute top-5 right-5 h-10 w-10 text-green hover:cursor-pointer hover:text-indigo-500 transition duration-200 ' onClick={handleClick} />}

    </div>
  )
}

export default App
