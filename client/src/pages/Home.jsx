import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>Home</h1>
      <p className='mb-4 text-slate-700'>
       Welcome To My App
      </p>
    </div>
    </>
  )
}

export default Home