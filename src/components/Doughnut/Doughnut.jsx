import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyDoughnutChart = ({ completadas, solicitadas, vencidas, rechazadas, radicadas }) => {
  const chartRef = useRef(null);
  const myDonChart = useRef(null); 

  useEffect(() => {
    const totalData = [completadas, radicadas, solicitadas, rechazadas, vencidas]


    const data = {
      labels: ['Completadas', 'Radicadas', 'Solicitadas', 'Rechazadas', 'Vencidas'],
      datasets: [
        {
          data: totalData,
          backgroundColor: ['rgba(76, 175, 80, 0.5)', 'rgba(233, 169, 8, 0.5)', 'rgba(33, 150, 243, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(142, 141, 141, 0.5)'],
          borderColor: ['rgba(76, 175, 80, 1)', 'rgba(233, 169, 8, 1)', 'rgba(33, 150, 243, 1)', 'rgba(255, 99, 132, 1)', 'rgba(142, 141, 141, 1)'],
          borderWidth: 1,
        },
      ],
    }

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: window.innerWidth >= 1300,
        },
      }
    };

    // Destruir el gráfico anterior si existe
    if (myDonChart.current) {
      myDonChart.current.destroy();
    }

    // Crear instancia de gráfico de tipo "pie"
    const ctx = chartRef.current.getContext('2d');
    myDonChart.current = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });

    // Limpiar al desmontar el componente
    return () => {
      if (myDonChart.current) {
        myDonChart.current.destroy();
      }
    };
  }, []);

  return(
    <div style={{background: "#fff", padding: "10px", borderRadius: "10px"}}>
      <canvas ref={chartRef} width="33.33%" height="100%"></canvas>
    </div>
  );
};

export default MyDoughnutChart;