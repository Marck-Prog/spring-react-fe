import { Box } from "@mui/material";
import { electronicsLevelThree } from "../../../data/category/level three/electronicsLevelThree";
import { furnitureLevelThree } from "../../../data/category/level three/furnitureLevelThree";
import { menLevelThree } from "../../../data/category/level three/menLevelThree";
import { womenLevelThree } from "../../../data/category/level three/womenLevelThree";
import { electronicsLevelTwo } from "../../../data/category/level two/electrnicsLevelTwo";
import { furnitureLevelTwo } from "../../../data/category/level two/furnitureLevelTwo";
import { menLevelTwo } from "../../../data/category/level two/menLevelTwo";
import { womenLevelTwo } from "../../../data/category/level two/womenLevelTwo";
import { useNavigate } from "react-router-dom";

const categoryTwo: { [key: string]: any[] } = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicsLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowSheet }: any) => {
  const navigate = useNavigate();

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter(
      (child: any) => child.parentCategoryId == parentCategoryId
    );
  };

  return (
    <Box className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div
            className="p-8 lg:w-[20%]"
            key={item.name}
            // {`p-8 lg:w-[20%] ${
            //   index % 2 === 0 ? "bg-slate-50" : "bg-white"
            // }`}
          >
            <p className="font-display text-2xl italic my-3 font-bold cursor-pointer bg-gradient-to-r from-slate-800 to-slate-800 bg-no-repeat bg-[length:0_3px] hover:bg-[length:80px_3px] bg-left-bottom transition-all duration-500">
              {item.name}
            </p>
            <ul className="space-y-3 mt-6 ">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item: any) => (
                <div key={item.name}>
                  <li
                    onClick={() => navigate("/products/" + item.categoryId)}
                    className="text-[20px] text-gray-500 hover:primary-text cursor-pointer"
                  >
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
