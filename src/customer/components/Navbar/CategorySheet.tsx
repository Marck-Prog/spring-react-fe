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
            <div
              className={`group transition-all flex justify-center w-24 relative`}
            >
              <p className="common-title left-0 my-3 text-[16px] cursor-pointer inline-block no-underline text-gray500 p-2 duration-500 group-hover:tracking-widest">
                {item.name}
              </p>
              <div className="border-b-2 border-transparent absolute bottom-3 w-1.5 duration-500 group-hover:w-3/4 group-hover:border-gray500 group-hover:duration-500"></div>
            </div>
            <ul className="space-y-3 mt-6 ">
              {childCategory(
                categoryThree[selectedCategory],
                item.categoryId
              ).map((item: any) => (
                <div key={item.name}>
                  <li
                    onClick={() => navigate("/products/" + item.categoryId)}
                    className="text-[16px] font-display text-gray400 hover:text-gray500 duration-500 cursor-pointer"
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
