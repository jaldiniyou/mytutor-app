import React from 'react';

export default function Map() {
  return (
    <div className="mt-12 rounded-xl overflow-hidden shadow-sm h-96">
      <iframe
        title="Mytutor Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.0408325707837!2d-7.636454323887719!3d33.59169575342457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2928ab116cd%3A0x5ceefdcd3b651043!2sBd%20d'Anfa%2C%20Casablanca%2020250%2C%20Morocco!5e0!3m2!1sen!2sma!4v1708701234567!5m2!1sen!2sma"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}