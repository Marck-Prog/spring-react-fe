import StarIcon from "@mui/icons-material/Star";
import {
  Divider,
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ReviewCard from "./ReviewCard";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#388E3C",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

const Review = () => {
  const value = 4.5;

  return (
    <div className="p-10 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[40%] space-y-2">
        <img
          src="https://threadheads.com/cdn/shop/files/Black-Front_5094d408-949f-4d27-89b0-d1b6c6173741.jpg?v=1732790241&width=700"
          alt=""
        />
        <div>
          <div>
            <p className="font-bold text-xl">Juan Graphico</p>
            <p className="text-lg text-gray-600">Men's Oversize Shirt</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
              <span className="font-sans text-gray-800">₱ 149.00</span>
              <span className="line-through text-gray-400">₱ 250.00</span>
              <span className="primary-text font-semibold">60%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 w-full">
        <h1 className="font-bold text-2xl font-display italic text-gray-700">
          Reviews & Ratings
        </h1>
        <div className="px-10 py-10 border border-gray-300 rounded-md text-gray-600">
          <div className="flex space-y-10">
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}></Box>
            <p className="font-semibold text-[17px]">Ratings</p>
          </div>

          {/* <div className="pt-4 grid grid-cols-1">
            <div className="">
              <p className="text-1xl font-display italic">Excellent</p>
              <div className="flex items-center gap-2 ">
                <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                  <BorderLinearProgress variant="determinate" value={80} />
                </Stack>
              </div>
              <p className="text-1xl font-display ml-10">19833</p>
            </div>
            <div className="grid grid-cols-5">
              <p className="text-1xl font-display italic gap-4">Good</p>
              <div className="">
                <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                  <BorderLinearProgress variant="determinate" value={80} />
                </Stack>
              </div>
              <p className="text-1xl font-display">19833</p>
            </div>
          </div> */}

          <div className="space-y-5 grid-cols-2">
            <div className="flex items-center gap-4 ">
              <p className="text-1xl font-display italic gap-4 ">Excellent</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={80} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic">Very Good</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={60} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic">Average</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={40} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-1xl font-display italic">Poor</p>
              <Stack spacing={2} sx={{ flexGrow: 1 }} color="success">
                <BorderLinearProgress variant="determinate" value={20} />
              </Stack>
              <p className="text-1xl font-display">19833</p>
            </div>
          </div>
        </div>

        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div className="space-y-5 mt-10">
            <ReviewCard /> <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Review;
