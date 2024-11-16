import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
  const service = useLoaderData();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 w-[90%] mx-auto mx-w-[1200px] mt-10">
      {service.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllTreatments;
