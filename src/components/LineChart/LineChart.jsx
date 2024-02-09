import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const myLineChart = useRef(null);  // Referencia para almacenar el gráfico

  useEffect(() => {
    // Datos de ejemplo
    const data = {
      labels: ['5', '10', '15', '20', '25', '30'],
      datasets: [{
        label: 'Afiliaciones',
        data: [30, 25, 40, 15, 50, 35],
        borderColor: 'rgba(76, 175, 80, 1)',
        fill: false
      }, {
        label: 'Actualización de datos',
        data: [15, 35, 20, 25, 40, 30],
        borderColor: 'rgba(230, 96, 21, 1)',
        fill: false
      }, {
        label: 'Solicitud créditos',
        data: [45, 40, 30, 20, 35, 25],
        borderColor: 'rgba(33, 150, 243, 1)',
        fill: false
      }]
    };

    // Configuración del gráfico
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true // Comienza en cero en el eje Y
        }
      }
    };

    // Destruir el gráfico anterior si existe
    if (myLineChart.current) {
      myLineChart.current.destroy();
    }

    // Crear instancia de gráfico de tipo "line"
    const ctx = chartRef.current.getContext('2d');
    myLineChart.current = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    // Limpiar al desmontar el componente
    return () => {
      if (myLineChart.current) {
        myLineChart.current.destroy();
      }
    };
  }, []); // Se ejecuta solo al montar/desmontar el componente

  return (
    <div style={{background: "#fff", padding: "10px", borderRadius: "10px"}}>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default LineChart;