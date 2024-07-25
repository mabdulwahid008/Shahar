import Continer from "../layouts/Continer";
import bg from "../assets/images/slider-bg.svg";
const ThirdContactForm = () => {
  return (
    <section className=" bg-primary md:py-16 py-10  text-white">
      <Continer>
        <div className="relative">
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            נפגעתם בתאונה, חליתם או נפצעתם ואיבדתם את כושר ההשתכרות? לא קיבלתם
            את מלוא זכויותיכם? השאירו פרטים כדי להתחיל בתהליך:
          </h1>

          <div className="mt-8">
            <form className="max-w-[800px] mx-auto relative  z-50">
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4 ">
                <div className=" col-span-1">
                  <label htmlFor="name" className="block mb-1.5 font-semibold">
                    שם מלא{" "}
                  </label>
                  <input
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
                  id="message"
                  type="text"
                  className="px-3 py-3 rounded-[4px] w-full  text-primary"
                  rows="6"
                ></textarea>
              </div>

              <div className="mt-4  text-center ">
                <button className="py-3 font-bold px-4 md:w-[230px] w-full rounded-[4px] bg-darkgold text-white">
                  שלח{" "}
                </button>
              </div>
            </form>
          </div>
          <img
            className="absolute md:w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            src={bg}
            alt="bg"
          />
        </div>
      </Continer>
    </section>
  );
};

export default ThirdContactForm;
