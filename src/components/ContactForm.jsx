import Continer from "../layouts/Continer";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qd1h7fu', 'template_ylbb823', form.current, 'YdM_yiakpOzKodjeL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="sm:hidden flex bg-primary md:py-16 py-10  text-white">
      <Continer>
        <div className="">
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            נפגעתם בתאונה, חליתם או נפצעתם ואיבדתם את כושר ההשתכרות? לא קיבלתם
            את מלוא זכויותיכם? השאירו פרטים כדי להתחיל בתהליך:{" "}
          </h1>

          <div className="mt-8">
            <form className="max-w-[800px] mx-auto"  ref={form} onSubmit={sendEmail}>
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4 ">
                <div className=" col-span-1">
                  <label htmlFor="name" className="block mb-1.5 font-semibold">
                    שם מלא{" "}
                  </label>
                  <input
                    name="full_name"
                    id="name"
                    type="text"
                    className="px-3 py-3 rounded-[4px] w-full text-primary"
                  />
                </div>

                <div className=" col-span-1">
                  <label htmlFor="phone" className="block mb-1.5 font-semibold">
                    טלפון נייד{" "}
                  </label>
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    className="px-3 py-3 rounded-[4px] w-full  text-primary"
                  />
                </div>
                <div className=" col-span-1">
                  <label htmlFor="email" className="block mb-1.5 font-semibold">
                    אימייל{" "}
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="px-3 py-3 rounded-[4px] w-full  text-primary"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block mb-1.5 font-semibold">
                  איך נוכל לעזור?{" "}
                </label>
                <textarea
                  name="message"
                  id="message"
                  type="text"
                  className="px-3 py-3 rounded-[4px] w-full  text-primary"
                  rows="6"
                ></textarea>
              </div>

              <div className="mt-4  text-center ">
                <button className="py-3 font-bold px-4 w-full md:w-[230px] rounded-[4px] bg-darkgold text-white">
                  שלח
                </button>
              </div>
            </form>
          </div>
        </div>
      </Continer>
    </section>
  );
};

export default ContactForm;
