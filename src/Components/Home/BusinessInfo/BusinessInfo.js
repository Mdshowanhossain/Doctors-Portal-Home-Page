import React from 'react';
import CardInfo from './CardInfo/CardInfo';

import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We Are Open 7 Days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, Ny 10036, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact Us',
        description: '+125458345812',
        icon: faPhone,
        background: 'primary'
    }
]



const BusinessInfo = () => {
    return (
        <section  className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <CardInfo info={info}></CardInfo>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;