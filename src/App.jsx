import { useState } from 'react'


function App() {
  const [color, setColor] = useState("rgb(71 85 105)")

  return (


    <div className='w-full h-screen duration-200 flex items-center content-end ' style={{ backgroundColor: color }}>

      <button className='bg-blue-700 text-white text-lg font-bold px-5 py-2 ml-10 rounded' onClick={
        () => {
          setColor("rgb(29 78 216)")
        }
      }>Blue</button>
      <button className='bg-green-700 text-white text-lg font-bold px-5 py-2  rounded mx-2' onClick={
        () => {
          setColor(" rgb(21 128 61)")
        }
      }>Green</button>
      <button className='bg-red-700 text-white text-lg font-bold px-5 py-2  rounded' onClick={
        () => {
          setColor("rgb(185 28 28)")
        }
      }>Red</button>
      <button className='bg-purple-700 text-black text-lg font-bold px-5 py-2  rounded mx-2' onClick={
        () => {
          setColor("rgb(126 34 206)")
        }
      }>purple</button>
      <button className='bg-yellow-400 text-black text-lg font-bold px-5 py-2  rounded mx-2' onClick={
        () => {
          setColor(" rgb(250 204 21)")
        }
      }>yellow</button>
      <button className='bg-emerald-500 text-black text-lg font-bold px-5 py-2  rounded mx-2' onClick={
        () => {
          setColor("rgb(16 185 129)")
        }
      }>emerald</button>
      <button className='bg-violet-800 text-black text-lg font-bold px-5 py-2  rounded mx-2' onClick={
        () => {
          setColor("rgb(91 33 182)")
        }
      }>violet</button>
      <button className='bg-pink-700 text-black text-lg font-bold px-5 py-2  rounded mx-2' onClick={
        () => {
          setColor("rgb(190 24 93)")
        }
      }>Pink</button>
    </div>






  )
}

export default App
