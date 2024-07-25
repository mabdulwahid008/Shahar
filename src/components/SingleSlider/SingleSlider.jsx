// import imageUrl from "../../assets/icons/1.svg";
// eslint-disable-next-line react/prop-types
const SingleSlider = ({ title, description, imageUrl, index }) => {
  return (
    <>
      <div className={`w-[48%] sm:w-1/2 lg:w-[32.7%] sm:min-h-[250px] item text-right p-6 sm:px-10 md:px-6 rounded-xl mb-2 md:mb-0 sm:py-3  px-1 ${ index % 2 === 0 ? "lading_even_item" : "lading_odd_item"}`}>
        <div className="sm:flex hidden w-12 h-12 img_wrapper relative mb-2">
          <img
            src={imageUrl}
            alt=""
            className=" w-8 h-8 md:p-0 p-[8px] mb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <h5 className="sm:mb-2 sm:text-2xl tracking-tight font-bold text-wrap sm:text-right text-center text-lg leading-5">{title}</h5>
        <p className=" sm:flex hidden mb-3 font-normal ">{description}</p>
      </div>
    </>
  );
};

export default SingleSlider;
