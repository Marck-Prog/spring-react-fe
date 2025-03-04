import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddressCard from "./AddressCard";
import React from "react";
import AddressForm from "./AddressForm";
import PricingCard from "../Cart/PricingCard";
import { green } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const paymentGatewayList = [
  {
    value: "PAYPAL",
    image:
      "https://imgs.search.brave.com/vcy9r5U7MYLu0idOSB56LMn_o1_KeU7tUIqG-RAb1ac/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2LzI2/LzVmL2E2MjY1ZmI0/MTIyMTEyNDJjNzJi/OWQyNDEyMzM0NDM1/LmpwZw",
    label: "",
  },
  {
    value: "STRIPE",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek2EqBo5YIE0TPMVMlIFA594WZZeuqYdAQQ&s",
    label: "",
  },
];

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateway, setPaymentGateway] = React.useState("PAYPAL");

  const handlePaymentChange = (event: any) => {
    setPaymentGateway(event.target.value);
  };

  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>

            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-3">
                {[1, 1, 1, 1, 1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>

              <div className="py-4 px-5 rounded-md border border-gray-300">
                <Button onClick={handleOpen}>Add new Address</Button>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="space-y-3 border border-gray-300 p-4 rounded-md">
                <h1 className="text-green-600 font-medium pb-2 text-center">
                  Choose Payment Method
                </h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0 p-5"
                  onChange={handlePaymentChange}
                  value={paymentGateway}
                >
                  {paymentGatewayList.map((item) => (
                    <FormControlLabel
                      className="border border-gray-300 w-[45%] pr-2 rounded-md flex justify-center focus-within:border-green-500"
                      value={item.value}
                      control={
                        <Radio
                          sx={{
                            "&.Mui-checked": {
                              color: green[600],
                            },
                          }}
                        />
                      }
                      label={
                        <img
                          className={`${
                            item.value == "stripe" ? "w-14" : ""
                          } object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border border-gray-300 rounded-md">
              <PricingCard />
              <div className="p-5">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ py: "11px" }}
                  className="!bg-blue-600 !font-display !font-semibold !capitalize"
                >
                  Pay now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm paymentGateway={paymentGateway} />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
