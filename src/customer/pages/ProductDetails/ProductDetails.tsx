import React, { useEffect, useState } from "react";
import {
  Add,
  FavoriteBorder,
  LocalMallOutlined,
  LocalShipping,
  Remove,
  Shield,
  Wallet,
  WorkspacePremium,
} from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import { Button, Divider } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import SimilarProduct from "./SimilarProduct";
import ReviewCard from "../Review/ReviewCard";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../State/customer/ProductSlice";

const ProductDetails = () => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product } = useAppSelector((store) => store);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    dispatch(fetchProductById(Number(productId)));
  }, [productId]);

  const handleActiveImage = (value: number) => () => {
    setActiveImage(value);
  };

  return (
    <div className="px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {product.product?.images.map((item, index) => (
              <img
                onClick={handleActiveImage(index)}
                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full lg:w-[85%]">
            <img
              className="w-full rounded-md"
              src={product.product?.images[activeImage]}
              alt=""
            />
          </div>
        </section>

        <section>
          <h1 className="font-bold text-3xl font-display italic">
            {product.product?.seller?.businessDetails.businessName}
          </h1>
          <p className="text-gray-500 font-semibold">
            {product.product?.title}
          </p>
          <div className="flex justify-between items-center py-2 border w-[180px] px-3 mt-5">
            <div className="flex gap-1 items-center">
              <span>4.5</span>
              <StarIcon sx={{ color: orange[400], fontSize: "20px" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <span>498 Ratings</span>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">
                ₱ {product.product?.sellingPrice}
              </span>
              <span className="line-through text-gray-400">
                ₱ {product.product?.mrpPrice}
              </span>
              <span className="primary-text font-semibold">
                {product.product?.discountPercent}%
              </span>
            </div>

            <div>
              <p className="text-sm">
                Easy free returns. Fast worldwide shipping
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-4">
                <Shield sx={{ color: green[700] }} />
                <p>Official Lord of the Rings merchandise</p>
              </div>
              <div className="flex items-center gap-4">
                <WorkspacePremium sx={{ color: green[700] }} />
                <p>Premium unisex graphic hoodie</p>
              </div>
              <div className="flex items-center gap-4">
                <LocalShipping sx={{ color: green[700] }} />
                <p>90s-inspired boxy fit with dropped shoulders</p>
              </div>
              <div className="flex items-center gap-4">
                <Wallet sx={{ color: green[700] }} />
                <p>Pay on delivery always available</p>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              <h1 className="text-gray-700 font-semibold">QUANTITY</h1>
              <div className="flex items-center gap-2 w-[140px] justify-between">
                <Button
                  disabled={quantity == 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <Remove />
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>
                  <Add />
                </Button>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <Button
                fullWidth
                variant="contained"
                startIcon={<LocalMallOutlined />}
                sx={{ py: "1rem" }}
                className="!font-display italic !text-1xl !font-bold"
              >
                Add to Cart
              </Button>

              <Button
                fullWidth
                variant="contained"
                startIcon={<FavoriteBorder />}
                sx={{ py: "1rem", fontSize: "15px" }}
                className="!font-display italic !text-1xl !font-bold"
              >
                Wishlist
              </Button>
            </div>

            <div className="mt-5">
              <p className="text-gray-500 font-semibold">
                {product.product?.description}
              </p>
            </div>

            <div className="mt-12 space-y-5">
              <ReviewCard />
              <Divider />
            </div>
          </div>
        </section>
      </div>

      <div className="mt-20">
        <h1 className="font-extrabold text-3xl font-display italic uppercase">
          You May Also Like
        </h1>
        <div className="pt-5">
          <SimilarProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
