import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChartSends = ({ afiliaciones, actualizacion, creditos }) => {
  const chartRef = useRef(null);
  const myBarChartSends = useRef(null);  // Referencia para almacenar el gráfico

  useEffect(() => {
    // Datos de ejemplo
    const data = {
      labels: ['Afiliaciones', 'Actualización de datos', 'Solicitud créditos'],
      datasets: [
        {
          data: [afiliaciones, actualizacion, creditos],
          backgroundColor: ['rgba(76, 175, 80, 0.5)', 'rgba(233, 169, 8, 0.5)', 'rgba(33, 150, 243, 0.5)'], 
          borderColor: ['rgba(76, 175, 80, 1)', 'rgba(233, 169, 8, 1)', 'rgba(33, 150, 243, 1)'],
          borderWidth: 1,
          barThickness: 55
        }
      ]
    };

    // Configuración del gráfico
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true // Comienza en cero en el eje Y
        }
      },
      plugins: {
        legend: { display: false },
      },
    };

    // Destruir el gráfico anterior si existe
    if (myBarChartSends.current) {
      myBarChartSends.current.destroy();
    }

    // Crear instancia de gráfico de tipo "line"
    const ctx = chartRef.current.getContext('2d');
    myBarChartSends.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    // Limpiar al desmontar el componente
    return () => {
      if (myBarChartSends.current) {
        myBarChartSends.current.destroy();
      }
    };
  }, []); // Se ejecuta solo al montar/desmontar el componente

  return (
    <div style={{background: "#fff", padding: "10px", borderRadius: "10px"}}>
      <canvas ref={chartRef} width="33.33%" height="100%"></canvas>
    </div>
  );
};

export default BarChartSends