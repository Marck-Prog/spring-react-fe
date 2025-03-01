import { Divider } from "@mui/material";

const PricingCard = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Subtotal</span>
          <span>₱1999</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Discount</span>
          <span>₱259</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Shipping</span>
          <span>₱99</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 font-medium">
          <span>Platform</span>
          <span className="text-green-600">Free</span>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center text-gray-700 text-[16px] font-extrabold italic font-display p-5">
        <span>Total</span>
        <span>₱1799</span>
      </div>
    </>
  );
};

export default PricingCard;
