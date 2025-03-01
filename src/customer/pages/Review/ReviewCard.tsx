import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid2, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid2 container spacing={9}>
        <Grid2 size={{ xs: 1 }}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              S
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 9 }}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Sev Bautista</p>
              <p className="opacity-70">2024-01-01</p>
            </div>
          </div>
          <Rating readOnly value={4.5} precision={0.5} />
          <p className="text-gray-600 font-semibold">
            Comfy, warm, great cut on the hood, and elicits laughs. I've got a
            nice collection with different prints!
          </p>
          <div>
            <img
              className="w-24 h-24 object-cover mt-2"
              src="https://d4yxl4pe8dqlj.cloudfront.net/678d2f3b-80ca-4900-ba42-a1d9be42ee02/5d8645fa-cadf-40cd-94ad-77c32d496529/thumb-00001.jpg"
              alt=""
            />
          </div>
        </Grid2>
        <div>
          <IconButton>
            <Delete sx={{ color: red[400] }} />
          </IconButton>
        </div>
      </Grid2>
    </div>
  );
};

export default ReviewCard;
