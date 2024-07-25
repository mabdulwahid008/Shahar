import Continer from "../layouts/Continer";

import FaqCard from "./Faqs/FaqCard";

const Faqs = () => {
  return (
    <section className="  md:py-16 py-10  bg-lightprimary ">
      <Continer>
        <div className="relative">
          <h3 className="font-semibold md:text-2xl text-xl text-center">
            שאלות ותשובות{" "}
          </h3>
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            כאן נענה על כל השאלות החשובות שאולי יש לכם.
          </h1>

          <div className="mt-8 mx-auto max-w-4xl">
            <div>
              <div className="block md:pl-3 pb-2.5">
                <FaqCard
                  title='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                  desc='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                />
              </div>
              <div className="block md:pl-3 pb-2.5">
                <FaqCard
                  title="מהו סדר הגודל של פיצוי שאוכל לצפות לו?"
                  desc='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                />
              </div>
              <div className="block md:pl-3 pb-2.5">
                <FaqCard
                  title="כמה זמן לוקחת תביעה, ומתי אוכל לצפות לקבלת הפיצוי?"
                  desc='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                />
              </div>
              <div className="block md:pl-3 pb-2.5">
                <FaqCard
                  title="את מי בעצם אנחנו תובעים כאן, ולמה שהם ירצו לשלם לי?"
                  desc='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                />
              </div>
              <div className="block md:pl-3 pb-2.5">
                <FaqCard
                  title="אשמח להתחיל בתהליך. איך עושים את זה?"
                  desc='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                />
              </div>
              <div className="block md:pl-3 pb-2.5">
                <FaqCard
                  title="באיזה אזורים בארץ אתם עובדים?"
                  desc='איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?איך אוכל לדעת האם המקרה שלי מתאים לעו"ד שרי דביר?'
                />
              </div>
            </div>
          </div>
        </div>
      </Continer>
    </section>
  );
};

export default Faqs;
