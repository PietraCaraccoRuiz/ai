import React from 'react'
import Logo from '../assets/Logo.svg'

const Header = () => {
    return (
        <div className='w-full h-[20vh] flex justify-between items-end mx-[15vh] '>
            <div className='flex justify-center items-center gap-4'>
                <img src={Logo} className='' />
                <h1 className="text-3xl bg-gradient-to-b from-gray-900 to-gray-700/50 bg-clip-text text-transparent">OpticFlow</h1>
            </div>
        </div>
    )
}

export default Header