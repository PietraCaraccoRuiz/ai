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
        capacete: false,
        colete: false,
        luva: false,
        oculos: false,
        fone: false,
        bota: false
    });

    useEffect(() => {
        const fetchFlags = () => {
            axios.get("http://127.0.0.1:8000/deteccao")
                .then(res => setFlags(res.data))
                .catch(err => console.error(err));
        };

        fetchFlags(); // busca inicial

        const interval = setInterval(fetchFlags, 2000); // busca a cada 2 segundos

        return () => clearInterval(interval); // limpa quando o componente desmontar
    }, []);



    return (
        <div className='relative flex w-[30vh]'>
            <img src={Corpo} className='w-full' />

            <Epi ativo={flags.colete} epi={ColeteImg} style={{ top: '19%', left: '14%', width: '21vh' }} />
            <Epi ativo={flags.capacete} epi={HelmetImg} style={{ top: '-2%', left: '25%' }} />
            <Epi ativo={flags.luva} epi={LuvaImg} style={{ top: '48%', left: '0%' }} />
            <Epi ativo={flags.oculos} epi={OculosImg} style={{ top: '9%', left: '30%' }} />
            <Epi ativo={flags.fone} epi={FoneImg} style={{ top: '8%', left: '22%' }} />
            <Epi ativo={flags.bota} epi={BotasImg} style={{ top: '86%', left: '7%' }} />
        </div>
    );
};

export default Boneco;
