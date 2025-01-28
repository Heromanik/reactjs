import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [color,setcolor]=useState('black')
  // const picker=document.querySelector('.main')
  // console.log(picker);
  // function colorChange(mm) {
  //   document.body.style.backgroundColor = mm;
  //   console.log(mm)
    
  // }
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className=' main  bg-white p-2 rounded-md'>
        <button className='red  bg-red-600 mr-5 p-1 rounded-md' onClick={() =>setcolor('red')}>red</button>
        <button className='green bg-green-700 mr-5 p-1 rounded-md' onClick={ () =>setcolor('green')}>green</button>
        <button className='blue bg-blue-500 mr-5 p-1 rounded-md' onClick={() =>setcolor('blue')}>blue</button>
        <button className='orange bg-orange-600 mr-5 p-1 rounded-md' onClick={() =>setcolor('orange')}>orange</button>
      </div>
    </div>
     


    </>
  )

}
export default App
