import React from 'react'
import Boneco from './Boneco'
import Items from './Items'

const Container = () => {
    return (
        <div className='bg-[#F8F9FA] flex flex-col md:flex-row justify-around items-center mx-[20vh] mt-[3vh] py-10 shadow-2xl rounded-4xl'>
            <Boneco />
            <Items />
        </div>
    )
}

export default Container