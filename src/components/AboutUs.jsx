import Continer from "../layouts/Continer";
import about from "../assets/images/about.svg";
import abouttextimg from "../assets/images/abouttextimg.svg";
const AboutUs = () => {
  return (
    <section className="md:py-24 py-12  ">
      <Continer>
        <div className="md:flex justify-between items-center overflow-hidden md:px-5">
          <div className="flex items-center md:w-1/2 ">
            <div className="text-right ">
              <h1 className="font-bold md:text-5xl text-3xl">
                שלום, אני עו&quot;ד שרי דביר.
              </h1>
              <h3 className="font-semibold md:mt-5 mt-3 text-xl">
                אם נפגעת, חלית או נפצעת אני רוצה לומר לך שיש תקווה. יחד נוכל
                להפיק מהמצב את המירב.
              </h3>
              <div className="mt-3 relative">
                <img
                  src={abouttextimg}
                  alt=""
                  className="absolute md:w-[70%] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <div className="relative z-50">
                  <p className=" text-[14px]">
                    אם אתם קוראים שורות אלו, כנראה שאתם או אדם אהוב עברתם אירוע
                    לא נעים: פציעה, מחלה, תאונה, או כל דבר אחר ששיבש את שגרת
                    חייכם. אני רוצה להרגיע אתכם שהגעתם למקום הנכון.
                  </p>
                  <p className="mt-1 text-[14px]">
                    השליחות של חיי היא לעזור לאנשים שנפגעו או חלו. אני עושה זאת
                    באמצעות ידע רפואי ומשפטי שמאפשר לי לזהות את הפוטנציאל במצבים
                    רפואיים שונים. כעורכת דין, אני מנהלת משרד שמתמחה בתחומי
                    הנזיקין, מיצוי זכויות רפואיות, ותחומים משיקים נוספים.
                    לקוחותיי נהנים ממקצועיות ברמה הגבוהה ביותר ונחישות להגיע
                    לפיצוי המקסימלי עבורם
                  </p>
                  <p className="mt-1 text-[14px]">
                    מעבר לייצוג המשפטי, אני מאמינה שחלק מתפקידי כעורכת דין הוא
                    לשקף ללקוחותיי את המציאות, ואת ההזדמנויות שהיא מביאה. בין אם
                    נרצה בכך או לא, החיים קורים לכל אחד מאיתנו. לפעמים הם מביאים
                    דברים לא נעימים, כמו כאב או אובדן… אבל אני מאמינה גדולה בכך
                    שגם ברגעים הקשים חשוב לשמור על תקווה ואופטימיות, ולחייך! אני
                    כאן כדי להזכיר זאת ללקוחותיי, ולעזור להם להפיק את המירב גם
                    ממצבים לא פשוטים.
                  </p>
                  <p className="mt-1 text-[14px]">
                    מעבר לייצוג המשפטי, אני מאמינה שחלק מתפקידי כעורכת דין הוא
                    לשקף ללקוחותיי את המציאות, ואת ההזדמנויות שהיא מביאה. בין אם
                    נרצה בכך או לא, החיים קורים לכל אחד מאיתנו. לפעמים הם מביאים
                    דברים לא נעימים, כמו כאב או אובדן… אבל אני מאמינה גדולה בכך
                    שגם ברגעים הקשים חשוב לשמור על תקווה ואופטימיות, ולחייך! אני
                    כאן כדי להזכיר זאת ללקוחותיי, ולעזור להם להפיק את המירב גם
                    ממצבים לא פשוטים.
                  </p>
                  <p className="mt-2 ">אני וכל צוות המשרד כאן לשירותכם,</p>
                  <p className="mt-2 font-semibold ">עו&quot;ד שרי דביר</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex justify-end md:w-1/2 hidden ">
            <img src={about} alt="about" className="w-[80%]" />
          </div>
        </div>
      </Continer>
    </section>
  );
};

export default AboutUs;
