import React from 'react'
import Boneco from './Boneco'
import Items from './Items'

const Container = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center w-full my-10 md:mt-5'>
            <div className='bg-gray-200 rounded-4xl flex flex-col md:flex-row w-fit h-full justify-around items-center p-10 shadow-lg gap-40'>
                <Boneco />
                <Items />
            </div>
        </div>
    )
}

export default Container