import React from 'react';
import car from '../../assets/png/car.png'

function Home() {
  return (
    <div className='w-full flex flex-wrap items-center justify-around'  style={{ backgroundImage: `url(${car})` }}>


        <div className='container flex justify-around'>

          <div className='flex text-white gap-[50px]'>
            <button className='uppercase'>Главная</button>
            <button className='uppercase'>Главная</button>
            <button className='uppercase'>Главная</button>
            <button className='uppercase'>Главная</button>
          </div>
          <button className='text-red-500'>=</button>

        </div>

        
        <div className='bg-cover bg-center min-h-screen flex flex-col items-center justify-center'>
        
        <h1 className='text-5xl font-bold text-red-500 mt-20'>CAR MUSIC</h1>
        <h1 className='text-7xl text-red-500'>. . . .</h1>
        <p className='text-white text-center max-w-md mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores sapiente, fugit reiciendis quas optio harum! Asperiores aspernatur ullam quasi aliquam alias a animi, voluptatibus consequatur quas, ipsum provident suscipit.
        </p>
        
        
        <div className=' container grid grid-cols-3 w-full mt-[170px]'>

          <div className='p-4 border border-gray-300 w-full'>
            <h2 className='text-red-500 font-bold text-xl'>Адрес:</h2>
            <p className='text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus alias quasi.
            </p>
          </div>
    
          <div className='p-4 border border-gray-300'>
            <h2 className='text-red-500 font-bold text-xl'>Адрес:</h2>
            <p className='text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus alias quasi.
            </p>
          </div>
    
          <div className='p-4 border border-gray-300'>
            <h2 className='text-red-500 font-bold text-xl'>Адрес:</h2>
            <p className='text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae temporibus alias quasi.
            </p>
          </div>
          
        </div>

      </div>    
    </div>
  );
}

export default Home;
