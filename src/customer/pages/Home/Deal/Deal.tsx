import DealCard from "./DealCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useAppSelector } from "../../../../State/Store";

const Deal = () => {
  const { customer } = useAppSelector((store) => store);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  return (
    <div className="py-5 lg:px-20">
      <div className="flex items-center justify-between">
        {customer.homePageData?.deals.slice(0, 6).map((item) => (
          <DealCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Deal;
