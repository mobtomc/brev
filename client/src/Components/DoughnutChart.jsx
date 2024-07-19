import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  // Data for the doughnut chart
  const data = {
    labels:['Apple', 'Blueberry', 'Kiwi'],
    datasets: [
      {
        data: [10, 40, 30], // Hardcoded percentages
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Options for the doughnut chart
  const options = {
    cutoutPercentage: 70, // Adjust to create a hole in the center
    legend: {
      display: false,
    },
  };

  // Image URL for the center of the doughnut
//   const centerImage = 'path/to/your/image.png';

  return (
    <div>
      <Doughnut data={data} options={options} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {/* <img src={centerImage} alt="Center Image" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> */}
      </div>
    </div>
  );
};

export default DoughnutChart;
