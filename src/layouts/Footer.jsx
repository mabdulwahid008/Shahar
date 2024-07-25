/* eslint-disable no-unused-vars */
import React from "react";
import Continer from "./Continer";
import { FiMapPin } from "react-icons/fi";
import map from "../assets/images/map.svg";
import map2 from "../assets/images/map2.svg";
import { FaWhatsapp } from "react-icons/fa";
import chat from "../assets/images/chat.svg";
import call from "../assets/images/call.svg";

const Footer = () => {
  return (
    <footer className="md:py-16 sm:py-10 pt-10 pb-32">
      <Continer>
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <h1 className="font-bold text-3xl mb-4">פרטי התקשרות</h1>
              <div className="flex justify-start items-center gap-2 mb-2">
                <a href="https://maps.app.goo.gl/m7xof2FWy5tMUj7u7" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
                <FiMapPin className="w-6 h-6" />
                 <p style={{ marginRight: '20px' }}>
                   כתובת: אברהם פצ'ורניק 5 נס ציונה
                 </p>
                </a>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <a href="https://wa.me/+972508385858" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
                <FaWhatsapp className="w-6 h-6" />
                <p style={{ marginRight: '20px' }}>050-8385858</p>
                </a>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <a href="https://www.waze.com/en/live-map/directions/il/%D7%9E%D7%97%D7%95%D7%96-%D7%94%D7%9E%D7%A8%D7%9B%D7%96/%D7%A0%D7%A1-%D7%A6%D7%99%D7%95%D7%A0%D7%94/%D7%90%D7%91%D7%A8%D7%94%D7%9D-%D7%A4%D7%A6%D7%95%D7%A8%D7%A0%D7%99%D7%A7?place=Ei7XkNeR16jXlNedINek16Yn15XXqNeg15nXpywgTmVzcyBaaW9uYSwgSXNyYWVsIi4qLAoUChIJT6YzUum2AhUREwIFYQTRCQUSFAoSCSWziNGWtgIVESe9Ln1_t2Ga" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={chat} alt="chat" className="w-6 h-6" />
                  <p style={{ marginRight: '20px' }}>אברהם פצ'ורניק 5 נס ציונה</p>
                </a>
              </div>
              <div className="flex justify-start items-center gap-2 mb-2">
                <a href="tel:+972508385858" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={call} alt="chat" className="w-6 h-6" /> 
                  <p style={{ marginRight: '20px' }}>050-8385858</p>
                </a>
              </div>
            </div>
            <div class="google-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.5015250090987!2d34.804587474444396!3d31.920138527284514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7025607cb75%3A0x96030a159aa2fe95!2sMiniSun%20-%20Day%20and%20Night%20Rehovot!5e0!3m2!1sen!2sil!4v1705898746699!5m2!1sen!2sil" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </Continer>
    </footer>
  );
};

export default Footer;
