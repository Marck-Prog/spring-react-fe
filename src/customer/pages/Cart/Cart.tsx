import { Close, LocalOffer } from "@mui/icons-material";
import CartItemCard from "./CartItemCard";
import { orange } from "@mui/material/colors";
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../State/Store";
import { fetchUserCart } from "../../../State/customer/cartSlice";

const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store);

  const handleChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""));
  }, []);

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-60 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="cartItemSection lg:col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => (
            <CartItemCard item={item} key={item.id} />
          ))}
        </div>
        <div className="col-span-1 text-sm space-y-3 ">
          <div className="border border-gray-300 rounded-md px-5 py-3 space-y-5">
            <div className="flex gap-3 text-sm items-center">
              <div className="flex gap-3 text-sm items-center">
                <LocalOffer sx={{ color: orange[500], fontSize: "17px" }} />
              </div>
              <span className="text-gray-800 font-medium text-sm">
                Apply Coupons
              </span>
            </div>
            {true ? (
              <div className="flex justify-between items-center gap-3">
                <TextField
                  onChange={handleChange}
                  id="outlined-basic"
                  placeholder="coupon code"
                  size="small"
                  variant="outlined"
                  className="w-full"
                />
                <Button size="small">Apply</Button>
              </div>
            ) : (
              <div className="flex">
                <div className="p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center">
                  <span className="text-gray-600 font-medium text-sm">
                    COPOON99 Applied
                  </span>
                  <IconButton size="small">
                    <Close className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>

          <div className="border border-gray-300 rounded-md">
            <PricingCard />
            <div className="p-5">
              <Button
                onClick={() => navigate("/checkout")}
                fullWidth
                variant="contained"
                sx={{ py: "11px" }}
                className="!bg-blue-600 !font-display !font-bold !capitalize"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
