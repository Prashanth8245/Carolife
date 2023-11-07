import React from 'react';

export default function Home() {
  return (
    <div>
        <h1 className='columns-1 text-center font-serif text-4xl font-semibold p-4' >Welcome to Carolife</h1>
        <h3 className='text-center font-serif text-xl font-semibold p-4'>Life Caring solution</h3>
        <div className='w-60 text-lg sm:w-96 sm:text-2xl font-semibold m-5 bg-rose-600 hover:border-rose-600 block mx-auto mt-20 p-10 border-2 rounded-full'>
          Emergency Service
        </div>
        <div className='w-60 text-lg sm:w-96 sm:text-2xl font-semibold m-5 bg-slate-400 hover:border-slate-400 block mx-auto  p-10 border-2 rounded-full'>
          Authorized Service
        </div>
    </div>
  );
}
