import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BarChartComponent = ({ data, xKey, barKey, barColor }) => {
  const handleBarClick = (data,) => {
    toast.info(`Selected ${xKey}: ${data[xKey]}, ${barKey}: ${data[barKey]}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <RechartsTooltip />
          {/* <Legend /> */}
          <Bar
            dataKey={barKey}
            fill={barColor}
            onClick={(data, index) => handleBarClick(data, index)}
          />
        </BarChart>
      </ResponsiveContainer>
      <ToastContainer />
    </div>
  );
};

export default BarChartComponent;
