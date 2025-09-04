import React from 'react'
import Boneco from './Boneco'
import Items from './Items'

const Container = () => {
    return (
        <div className='w-full h-[80vh] flex justify-start items-center gap-[15vh] mx-[20vh]'>
            <Boneco />
            <Items />
        </div>
    )
}

export default Container