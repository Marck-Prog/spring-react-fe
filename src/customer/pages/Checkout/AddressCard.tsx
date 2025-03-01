import { Radio } from "@mui/material";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };

  return (
    <div className="p-5 border rounded-md border-gray-300 flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Sarah Bautista</h1>
        <p className="w-[320px]">Danao Libona, Philippines</p>
        <p>
          <strong>Mobile: </strong> +639123456789
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
