import Continer from "../layouts/Continer";
import hero from "../assets/images/hero.svg";
const Hero = () => {
  return (
    <section className=" bg-primary md:-mt-12 text-white">
      <Continer>
        <div className="md:flex justify-between h-full overflow-hidden md:px-5">
          <div className="md:w-1/2 flex items-center">
            <div className="text-right">
              <h1 className="font-bold md:text-5xl text-3xl">
                שרי דביר משרד עורכי דין
              </h1>
              <h3 className="font-semibold md:mt-5 mt-3 md:text-2xl text-xl">
                תביעות נזיקין, ביטוח לאומי,<br></br> תביעות ביטוח ורשלנות רפואית
              </h3>
              <div className="flex  items-center mt-3 ">
                <p className="max-w-md md:mt-5 ">
                  משרדנו מתמחה בסיוע משפטי לנפגעי תאונות ולסובלים ממחלות ופציעות
                  שונות, ניהול תיקים מורכבים מול המוסד לביטוח לאומי וחברות
                  הביטוח. לאורך השנים סייענו למאות לקוחות לקבל פיצוי או גמלה.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full md:w-1/2 relative z-30">
            <img className="" src={hero} alt="hero" />
          </div>
          {/* <div className="h-full md:w-1/2 md:hidden pt-3">
            <img className=" mx-auto" src={hero} alt="hero" />
          </div> */}
        </div>
      </Continer>
    </section>
  );
};

export default Hero;
