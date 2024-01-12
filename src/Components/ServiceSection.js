import React from 'react';
import './Service.css'

const ServicesSection = () => {
  return (
    <>
    <div className="free"></div>
    <h3 id='service'>SERVICES PROVIDING</h3>
    <section className="services">
      
      <div className="service">
        <h2>Appointment Scheduling</h2>
        <p>Efficiently manage appointments and bookings for your business.</p>
      </div>

      <div className="service">
        <h2>Administrative Support</h2>
        <p>Get professional assistance with administrative tasks and organization.</p>
      </div>

      <div className="service">
        <h2>Social Media Management</h2>
        <p>Enhance your online presence with expert social media management services.</p>
      </div>
      
      {/* Add more services as needed */}

    </section>
    </>
  );
};

export default ServicesSection;
