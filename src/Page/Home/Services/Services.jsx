import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-6">
      <div className="space-y-4 text-center">
        <h3 className="text-3xl font-bold text-orange-400">Services</h3>
        <h2 className="text-5xl font-medium">Our Services Area</h2>
        <p className="text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {Services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center items-center my-5">
      <button className="btn btn-warning btn-outline">More Services</button>
      </div>
    </div>
  );
};

export default Services;