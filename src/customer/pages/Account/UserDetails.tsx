import { Divider } from "@mui/material";
import ProfileFieldCard from "../../../component/ProfileFieldCard";
import { useAppSelector } from "../../../State/Store";

// Utility function to capitalize the first letter
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const UserDetails = () => {
  const { auth } = useAppSelector((store) => store);

  return (
    <div className="flex justify-center py-10">
      <div className="w-full lg:w-[70%]">
        <div className="flex items-center pb-3 justify-between">
          <h1 className="text-2xl font-bold text-gray-600">Personal Details</h1>
        </div>

        <div className="">
          <ProfileFieldCard
            keys="Name"
            value={capitalizeFirstLetter(auth.user?.fullName || "")}
          />
          <Divider />
          <ProfileFieldCard keys="Email" value={auth.user?.email || ""} />
          <Divider />
          <ProfileFieldCard
            keys="Mobile"
            value={auth.user?.mobile || "0989561463"}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
