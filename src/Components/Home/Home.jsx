import React from 'react';
import car from '../../assets/png/car.png'

function Home() {
  return (
    <div className='text-white'>


      <div className='bg-cover bg-center min-h-screen flex flex-col items-center justify-center'  style={{ backgroundImage: `url(${car})`}}>
        
        <h1 className='text-5xl font-bold text-red-500 mt-20'>CAR MUSIC</h1>
        <h1 className='text-7xl text-red-500'>. . . .</h1>
        <p className='text-white text-center max-w-md mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores sapiente, fugit reiciendis quas optio harum! Asperiores aspernatur ullam quasi aliquam alias a animi, voluptatibus consequatur quas, ipsum provident suscipit.
        </p>
      
      
        <div className=' container grid grid-cols-3 w-full mt-[370px]'>

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

      
      <div className='container w-[1900px] flex mx-auto bg-neutral-900'>
      
        <div className='container mx-auto p-[180px]'>
          <h1 className='uppercase'>наши достижения от кубка россии до чемпионатов мира</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </h3>
        </div>

          <div className='mt-[100px]'>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>
          
          </div>

          <div className='mt-[150px] mr-[250px]'>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>

            <div className='p-4 border'>
              <h1 className='text-xs font-bold'>#1</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel labore dolorum culpa illum recusandae iusto! Aliquid,</p>
            </div>
          
          </div>
        
          <div>

          <div>

            <div>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe obcaecati facilis dolorem modi, facere optio impedit. Perspiciatis consequatur adipisci tempora hic labore ut corrupti, incidunt nisi vitae ducimus ipsa?</p>
            </div>
            <div>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe obcaecati facilis dolorem modi, facere optio impedit. Perspiciatis consequatur adipisci tempora hic labore ut corrupti, incidunt nisi vitae ducimus ipsa?</p>
            </div>
            <div>
              <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe obcaecati facilis dolorem modi, facere optio impedit. Perspiciatis consequatur adipisci tempora hic labore ut corrupti, incidunt nisi vitae ducimus ipsa?</p>
            </div>

          </div>

          </div>

      </div>

    </div>
  );
}

export default Home;
