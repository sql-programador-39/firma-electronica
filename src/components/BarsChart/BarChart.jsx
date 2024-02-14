import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ afiliaciones, actualizacion, creditos}) => {

  const chartRef = useRef(null);
  const myBarChart = useRef(null);  // Referencia para almacenar el gráfico

  useEffect(() => {
    // Datos de ejemplo
    const data = {
      labels: ['Afiliaciones', 'Actualización de datos', 'Solicitud créditos'],
      datasets: [
        {
          label: 'Completadas',
          data: [afiliaciones[0], actualizacion[0], creditos[0]],
          backgroundColor: 'rgba(76, 175, 80, 0.5)', // Verde
          borderColor: 'rgba(76, 175, 80, 1)',
          borderWidth: 1
        },
        {
          label: 'Rechazadas',
          data: [afiliaciones[3], actualizacion[3], creditos[3]],
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // Rojo
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Solicitadas',
          data: [afiliaciones[1], actualizacion[1], creditos[1]],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Radicadas',
          data: [afiliaciones[4], actualizacion[4], creditos[4]],
          backgroundColor: 'rgba(233, 169, 8, 0.5)', // Amarillo
          borderColor: 'rgba(233, 169, 8, 1)',
          borderWidth: 1
        },
        {
          label: 'Vencidas',
          data: [afiliaciones[2], actualizacion[2], creditos[2]],
          backgroundColor: 'rgba(142, 141, 141, 0.5)',
          borderColor: 'rgba(142, 141, 141, 1)',
          borderWidth: 1
        }
      ]
    };

    // Configuración del gráfico
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
    if (myBarChart.current) {
      myBarChart.current.destroy();
    }

    // Crear instancia de gráfico de tipo "bar"
    const ctx = chartRef.current.getContext('2d');
    myBarChart.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });

    // Limpiar al desmontar el componente
    return () => {
      if (myBarChart.current) {
        myBarChart.current.destroy();
      }
    };
  }, []); // Se ejecuta solo al montar/desmontar el componente

  return (
    <div style={{ background: "#fff", padding: "10px", borderRadius: "10px" }}>
      <canvas ref={ chartRef } width="33.33%" height="100%"></canvas>
    </div>
  );
};

export default BarChart;