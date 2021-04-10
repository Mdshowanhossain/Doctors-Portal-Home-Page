import React from 'react';

import Fluoride from '../../../images/Fluoride.png';

import cavity from '../../../images/cavity.png';

import white from '../../../images/white.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        img: white
    }
]




const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h4 style={{ color: '#1CC7C1' }}>OUR SERVICES</h4>
                <h2>Services We Provide</h2>
            </div>


            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;