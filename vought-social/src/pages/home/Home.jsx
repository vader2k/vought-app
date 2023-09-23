import React from 'react'
import {Post, Stories} from '../../components'


const Home = () => {
  return (
    <>
      <section className='sm:py-[20px] sm:px-[70px] py-[10px] px-[20px] dark:bg-gray-700 dark:text-white'>
        <Stories/>
        <Post/>
      </section>
    </>
  )
}

export default Home