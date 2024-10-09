import React from "react";
import { useNavigate } from "react-router-dom";
import './simulation.css';
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import data from "../utils/data.json"

const SimulationScreen = () => {
  const navigate = useNavigate();
  const handleMainWindow = () => {
    navigate('/main_window'); 
  };

    return (
      <div>
        <h1>This is the Simulation Screen</h1>
        <button onClick={handleMainWindow}>Back</button>
        <Line data={{
            labels: data.map((data) => data.Voltage),
            datasets: [
              {
                label: "Acceleration",
                data: data.map((data) => data.Acc_Net),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              }
            ],
          }}/>
      </div>
    );
  };
  
  export default SimulationScreen;