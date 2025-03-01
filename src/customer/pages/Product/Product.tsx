import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterSection from "./FilterSection";
import { FilterAlt } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import store, { useAppDispatch, useAppSelector } from "../../../State/Store";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchAllProducts } from "../../../State/customer/ProductSlice";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const { product } = useAppSelector((store) => store);

  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  };

  const handlePageChange = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const color = searchParams.get("color");
    const pageNumber = page - 1;
    const minDiscount = searchParams.get("discount")
      ? Number(searchParams.get("discount"))
      : undefined;

    const newFilter = {
      color: color || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minDiscount,
      pageNumber,
    };

    dispatch(fetchAllProducts(newFilter));
  }, [category, searchParams]);

  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-4xl italic text-center font-display font-extrabold text-gray-700 pb-5 px-9 uppercase space-x-2">
          Graphic Tees
        </h1>
      </div>

      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full lg:w-[80%] space-y-5">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-[50%]">
              {!isLarge && (
                <IconButton>
                  <FilterAlt />
                </IconButton>
              )}
              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>

            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={handleSortChange}
              >
                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                {/* <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          <Divider />
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {product.products.map((item) => (
              <ProductCard item={item} />
            ))}
          </section>
          <div className="flex justify-center py-10">
            <Pagination
              count={10}
              onChange={(e, value) => handlePageChange(value)}
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
