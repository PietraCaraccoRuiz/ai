import React from 'react'

import Item from "./Item"

import HelmetImg from '../assets/Helmet.svg';
import ColeteImg from '../assets/Colete.svg';
import LuvaImg from '../assets/Luvas2.svg';
import OculosImg from '../assets/Oculos.svg';
import FoneImg from '../assets/Fone.svg';
import BotasImg from '../assets/Botas.svg';

const Items = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <Item sla={ColeteImg} />
            <Item item={HelmetImg} />
            <Item item={LuvaImg} />
            <Item item={OculosImg} />
            <Item item={FoneImg} />
            <Item item={BotasImg} />
        </div>
    )
}

export default Items