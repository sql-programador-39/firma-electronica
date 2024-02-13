import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyDoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const totalData = [30, 40, 20];
    const ctx = chartRef.current.getContext('2d');

    const doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [
          {
            data: totalData,
            backgroundColor: ['red', 'green', 'blue'],
          },
        ],
      },
    });

    return () => {
      // Cleanup the chart on component unmount if needed
      doughnutChart.destroy();
    };
  }, []);

  return(
    <div style={{background: "#fff", padding: "10px", borderRadius: "10px"}}>
      <canvas ref={chartRef} width="33.33%" height="100%"></canvas>
    </div>
  );
};

export default MyDoughnutChart;