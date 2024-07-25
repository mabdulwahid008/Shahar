import arrow2 from "../../assets/images/arrow2.svg";

const Card = ({ description, title, className, tagname, tagclass }) => {
  return (
    <div
      className={`${
        className ? className : ""
      } col-span-1 min-h-[250px] relative pt-6 item text-right rounded-xl box_shadow `}
    >
      <h6
        className={`${
          tagclass ? tagclass : ""
        } py-1.5 px-4 inline-block rounded-l-3xl font-bold w-[90px]  text-lg`}
      >
        {tagname}
      </h6>
      <div className="px-6 pb-6 pt-4">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight ">{title}</h5>
        <p className="mb-3 font-normal ">{description}</p>
      </div>
      <img
        src={arrow2}
        alt="arrow2"
        className="absolute -top-12 right-0 w-[25%]"
      />
    </div>
  );
};

export default Card;
