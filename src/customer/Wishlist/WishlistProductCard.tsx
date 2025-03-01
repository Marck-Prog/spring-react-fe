import { Close } from "@mui/icons-material";
import { Product } from "../../types/ProductTypes";
import { useAppDispatch } from "../../State/Store";
import { addProductToWishlist } from "../../State/customer/wishlistSlice";

const WishlistProductCard = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch();

  const handleWishlist = () => {
    item.id && dispatch(addProductToWishlist({ productId: item.id }));
  };
  return (
    <div className="w-60 relative">
      <div className="w-full">
        <img
          src={item.images[0]}
          className="object-cover w-full h-[18rem]"
          alt=""
        />
      </div>
      <div className="pt-3 space-y-1">
        <p>{item.title}</p>
        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800">₱ {item.sellingPrice}</span>
          <span className="thin-line-through text-gray-400">
            ₱ {item.mrpPrice}
          </span>
          <span className="text-green-500 font-semibold">
            {item.discountPercent}%
          </span>
        </div>
      </div>

      <div className="absolute top-2 right-2">
        <button onClick={handleWishlist}>
          <Close
            className="cursor-pointer p-1 hover:bg-stone-400 hover:text-white rounded-full transition ease-in-out duration-500"
            sx={{ color: "white"[200], fontSize: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default WishlistProductCard;
