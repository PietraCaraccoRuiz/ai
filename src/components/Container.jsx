import React from 'react'
import Boneco from './Boneco'
import Items from './Items'

const Container = () => {
    return (
        <div className='w-full h-[72vh] flex justify-start items-center gap-[15vh] mx-[20vh] my-[4vh] p-[5vh] shadow-2xl rounded-4xl'>
            <Boneco />
            <Items />
        </div>
    )
}

export default Container