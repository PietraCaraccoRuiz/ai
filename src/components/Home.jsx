import React from 'react'
import Header from './Header'
import Container from './Container'


const Home = () => {
    return (
        <div className='bg-white h-[100vh] overflow-x-hidden md:overflow-hidden'>
            <Header />
            <Container />
        </div>
    )
}

export default Home