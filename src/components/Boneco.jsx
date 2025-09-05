import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

import Corpo from '../assets/Boneco.svg';
import Epi from './Epi';

import HelmetImg from '../assets/Helmet.svg';
import ColeteImg from '../assets/Colete.svg';
import LuvaImg from '../assets/Luvas2.svg';
import OculosImg from '../assets/Oculos.svg';
import FoneImg from '../assets/Fone.svg';
import BotasImg from '../assets/Botas.svg';

const Boneco = () => {

    const [flags, setFlags] = useState({
        capacete: true,
        colete: true,
        luva: true,
        oculos: true,
        fone: true,
        bota: true
    });

    useEffect(() => {
        const fetchFlags = () => {
            axios.get("http://127.0.0.1:8000/deteccao")
                .then(res => setFlags(res.data))
                .catch(err => console.error(err));
        };

        fetchFlags();

        const interval = setInterval(fetchFlags, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className='relative flex w-[30vh]'>
            <img src={Corpo}/>

            <Epi ativo={flags.colete} epi={ColeteImg} style={{ top: '12.6vh', left: '4.5vh', width: '21vh' }} />
            <Epi ativo={flags.capacete} epi={HelmetImg} style={{ top: '-1vh', left: '7.4vh', width: '14vh' }} />
            <Epi ativo={flags.luva} epi={LuvaImg} style={{ top: '32vh', left: '-0.vh', width: '30vh' }} />
            <Epi ativo={flags.oculos} epi={OculosImg} style={{ top: '5.5vh', left: '8.3vh', width: '12vh' }} />
            <Epi ativo={flags.fone} epi={FoneImg} style={{ top: '5vh', left: '6.3vh', width: '16vh' }} />
            <Epi ativo={flags.bota} epi={BotasImg} style={{ top: '56vh', left: '2vh', width: '25vh' }} />
        </div>
    );
};

export default Boneco;
