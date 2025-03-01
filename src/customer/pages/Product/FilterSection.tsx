import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { colors } from "../../../data/Filter/color";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [expandBrand, setExpandBrand] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleExpandColor = () => {
    setExpendColor(!expendColor);
  };

  const handleExpandBrand = () => {
    setExpandBrand(!expandBrand);
  };

  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("clearAllFilters", searchParams);
    searchParams.forEach((value: any, key: any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r border-r-slate-200">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          onClick={clearAllFilters}
          size="small"
          className="!text-black cursor-pointer font-semibold"
        >
          clear all
        </Button>
      </div>
      <Divider />

      <div className="px-9 space-y-6 py-4">
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                // color: blue[400],
              }}
              className="text-2xl font-semibold"
              id="color"
            >
              Color
            </FormLabel>
            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {colors.slice(0, expendColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  value={item.name}
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${
                          item.name === "White" ? "border" : ""
                        }`}
                      ></p>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <div>
            <button
              onClick={handleExpandColor}
              className="text-slate-600 bg-slate-200 px-4 py-1 rounded-full cursor-pointer hover:text-slate-200 hover:bg-slate-700 flex items-center"
            >
              {expendColor ? "Hide" : `+${colors.length - 5} more`}
            </button>
          </div>
        </section>

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                // color: blue[400],
              }}
              className="text-2xl font-semibold"
              id="price"
            >
              Price
            </FormLabel>
            <RadioGroup
              aria-labelledby="price"
              onChange={updateFilterParams}
              defaultValue=""
              name="price"
            >
              {price.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
        <Divider />

        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                pb: "14px",
                // color: blue[400],
              }}
              className="text-2xl font-semibold"
              id="brand"
            >
              Discount
            </FormLabel>
            <RadioGroup
              aria-labelledby="brand"
              onChange={updateFilterParams}
              defaultValue=""
              name="discount"
            >
              {discount.map((item, index) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
