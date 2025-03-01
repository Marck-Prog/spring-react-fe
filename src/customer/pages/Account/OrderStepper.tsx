import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const steps = [
  { name: "Order Placed", description: "on Thu, 11 Feb", value: "PLACED" },
  {
    name: "Packed",
    description: "Item Packed in Dispatch Warehouse",
    value: "CONFIRM",
  },
  { name: "Shipped", description: "by Fri, 23 Feb", value: "SHIPPED" },
  { name: "Arriving", description: "by 25 Tue, 28 Feb", value: "ARRIVING" },
  { name: "Arrived", description: "by 25 Tue, 28 Feb", value: "DELIVERED" },
];

const canceledStep = [
  { name: "Order Placed", description: "on Thu, 11 Feb", value: "PLACED" },
  { name: "Order Canceled", description: "on Thu, 11 Feb", value: "CANCELLED" },
];

const currentStep = 2;

const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);

  useEffect(() => {
    if (orderStatus === "CANCELLED") {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);

  return (
    <Box className="my-10">
      {statusStep.map((step, index) => (
        <>
          <div className={`flex px-4`} key={index}>
            <div className="flex flex-col items-center">
              <Box
                sx={{ zIndex: -1 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  index <= currentStep
                    ? "bg-gray-200 text-teal-500"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.value === orderStatus ? (
                  <CheckCircleIcon />
                ) : (
                  <FiberManualRecordIcon sx={{ zIndex: -1 }} />
                )}
              </Box>
              {statusStep.length - 1 != index && (
                <div
                  className={`border border-gray-300 h-20 w-[2px] ${
                    index < currentStep
                      ? "bg-teal-500"
                      : "bg-gray-300 text-gray-600"
                  }`}
                ></div>
              )}
            </div>

            <div className={`ml-2 w-full`}>
              <div
                className={`${
                  step.value === orderStatus
                    ? "bg-teal-500 p-2 text-white font-medium rounded-md -translate-y-3"
                    : ""
                } ${
                  orderStatus === "CANCELLED" && step.value === orderStatus
                    ? "bg-red-500"
                    : ""
                } w-full`}
              >
                <p className={``}>{step.name}</p>
                <p
                  className={` ${
                    step.value === orderStatus
                      ? "text-gray-200"
                      : "text-gray-500"
                  } text-sm`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </Box>
  );
};

export default OrderStepper;
