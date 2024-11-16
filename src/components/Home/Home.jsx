import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {
    const services = useLoaderData()
    const {serviceData, feedBackData} = services
    return (
        <div className=''>
            <Banner></Banner>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 w-[90%] mx-auto mx-w-[1200px] mt-10'>
                {
                    serviceData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <button className='mx-auto block btn btn-primary mt-10 '>
                <NavLink to="/allTreatments">Check More</NavLink>
            </button>

           
           <FeedBack feedBackData={feedBackData}></FeedBack>
           

        </div>
    );
};

export default Home;