import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";
import { CartItem } from "../../../types/cartTypes";
import { useAppDispatch } from "../../../State/Store";
import { updateCartItem } from "../../../State/customer/cartSlice";
import { useState } from "react";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleUpdateQuantity = (value: number) => () => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      dispatch(
        updateCartItem({
          jwt: localStorage.getItem("jwt"),
          cartItemId: item.id,
          cartItem: { quantity: newQuantity },
        })
      );
    }
  };

  return (
    <div className="border border-gray-300 rounded-md relative">
      <div className="p-5 flex gap-3">
        <div>
          <img
            className="w-[90px] rounded-md"
            src={item.product.images[0]}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-semibold text-lg">
            {item.product.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            {item.product.title}
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Sold by: </strong>
            Juan Graphico
          </p>
          <p className="text-sm">7 days replacement available</p>
          <p className="text-sm text-gray-500">
            <strong>Quantity:</strong> {quantity}
          </p>
        </div>
      </div>
      <Divider />

      <div className="flex justify-between items-center">
        <div className="px-5 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 w-[140px] justify-between">
            <Button onClick={handleUpdateQuantity(-1)} disabled={quantity <= 0}>
              <Remove />
            </Button>
            <span>{quantity}</span>
            <Button onClick={handleUpdateQuantity(1)}>
              <Add />
            </Button>
          </div>
        </div>
        <div className="pr-5">
          <p className="text-gray-700 font-medium">
            ₱ {item.sellingPrice * quantity}
          </p>
        </div>
      </div>
      <div className="absolute top-1 right-1">
        <IconButton>
          <Close color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItemCard;
