import Continer from "../layouts/Continer";
import bg from "../assets/images/slider-bg.svg";
import img23 from "/assets/images/img23.svg";
import Card from "./HowWeDo/Card";

const HowWeDo = () => {
  return (
    <section className="md:py-24 py-12 min-h-screen md:overflow-hidden ">
      <Continer>
        <div className="relative">
          <div className="text-center  relative z-50">
            <h3 className="font-semibold md:text-2xl text-xl">
              כך אנחנו עובדים
            </h3>
            <h1 className="font-semibold md:text-5xl text-4xl mt-4">
              זהו התהליך שאנו עוברים עם לקוחות המשרד:
            </h1>
            <p className="mt-2 hidden md:block">
              נפגעתם מתאונה, מחלה או פציעה? לא קיבלתם את מלוא הזכויות המגיעות
              לכם?
            </p>
          </div>
          {/* render slider contents start */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:min-h-[60vh] gap-7 mt-10 justify-center items-start relative z-50">
            <div className="hide_img_arrow2 md:ml-0 ml-[45px]">
              <Card
                tagname="שלב 1"
                tagclass="bg-darkgold text-white "
                title="בדיקת התאמה"
                description='הבדיקה ללא עלות, ומבוססת על שיחה עם עו"ד דביר במהלכה היא תברר את פרטי המקרה ותעריך את היתכנות הפיצוי.'
                className="bg-white text-primary"
              />
            </div>
            <div className="md:mt-[10vh] mt-[5vh] md:ml-0 ml-[30px]">
              <Card
                tagname="שלב 2"
                tagclass="bg-white text-primary"
                title="גיבוש התיק"
                description="צוות המשרד יאסוף מסמכים, יחקור את התיק הרפואי, ילמד, יכווין את הלקוח לבדיקות נוספות, ויגבש את התביעה."
                className="bg-primary text-white "
              />
            </div>
            <div className="md:mt-[20vh] mt-[5vh] md:ml-0 ml-[15px]">
              <Card
                tagname="שלב 3"
                tagclass="bg-darkgold text-white "
                title="ניהול התביעה"
                description="צוות המשרד יעבוד מול הנתבעים, יציג להם הוכחות לזכאות לפיצוי, וינהל משא ומתן. אחד מעורכי הדין של המשרד יתלווה ללקוח לוועדה הרלוונטית לעניינו כדי לייצגו שם."
                className="bg-white text-primary"
              />
            </div>
            <div className="md:mt-[30vh] mt-[5vh]  ">
              <Card
                tagname="שלב 4"
                tagclass="bg-white text-primary"
                title="סיום התביעה"
                description='עו"ד דביר וצוות המשרד יפעלו להשגת הפיצוי המקסימאלי ללקוח, קצבה, הטבת מס, ועוד.'
                className="bg-primary text-white "
              />
            </div>
          </div>
          <img
            className="absolute hidden md:block w-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            src={bg}
            alt="bg"
          />
          <img
            className="absolute md:hidden block  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            src={img23}
            alt="img23"
          />
        </div>
      </Continer>
    </section>
  );
};

export default HowWeDo;
