import React from 'react';
import car from '../../assets/png/car.png'

function Home() {
  return (
    <div className='w-full flex flex-wrap items-center justify-around bg-cover'  style={{ backgroundImage: `url(${car})` }}>

        <div className='container flex justify-around'>

          <div className='flex text-white gap-[50px]'>
            <button className='uppercase'>Главная</button>
            <button className='uppercase'>Главная</button>
            <button className='uppercase'>Главная</button>
            <button className='uppercase'>Главная</button>
          </div>
          <button className='text-red-500'>=</button>

        </div>
    
    </div>
  );
}

export default Home;
