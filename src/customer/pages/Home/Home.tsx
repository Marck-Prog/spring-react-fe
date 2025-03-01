import { Button } from "@mui/material";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import Deal from "./Deal/Deal";
import ElectricCategory from "./ElectricCategory/ElectricCategory";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import { Store } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <div className="space-y-5 lg:space-y-10 relative pb-20">
        <ElectricCategory />
        <CategoryGrid />
        <div className="pt-20">
          <h1 className="text-lg lg:text-4xl font-black italic pb-5 lg:pb-10 text-center font-display">
            TODAY'S DEAL
          </h1>
          <Deal />
        </div>

        <section className="py-20">
          <h1 className="text-lg lg:text-4xl font-black italic pb-5 lg:pb-10 text-center font-display">
            SHOP BY CATEGORY
          </h1>
          <ShopByCategory />
        </section>

        <section className="lg:px-20 relative h-[200px] lg:h-[500px]">
          <img
            className="w-full h-full transform scale-x-[-1] object-cover"
            src="https://threadheads.com/cdn/shop/files/Gifting_Desktop_Hero_0b2adbd4-008b-4fc7-bfcb-19a3a7e463e3.jpg?v=1736993626&width=1200"
            alt=""
          />
          <div className="absolute top-1/3 left-4 lg:left-[15rem] transform-translate-y-1/2 font-semibold lg:text-4xl space-y-3 text-white">
            <h1>Sell your Product</h1>
            <p className="text-lg md:text-2xl">
              With <span className="logo">Juan Graphico</span>
            </p>

            <div className="pt-6 flex justify-center">
              <Button
                startIcon={<Store />}
                variant="contained"
                size="large"
                className="!bg-tertiary"
              >
                Become Seller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
