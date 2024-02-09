import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const myBarChart = useRef(null);  // Referencia para almacenar el gráfico

  useEffect(() => {
    // Datos de ejemplo
    const data = {
      labels: ['Afiliaciones', 'Actualización de datos', 'Solicitud créditos'],
      datasets: [
        {
          label: 'Completadas',
          data: [25, 40, 15, 30, 20],
          backgroundColor: 'rgba(75, 192, 192, 0.5)', // Verde
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Rechazadas',
          data: [30, 25, 40, 15, 50],
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // Rojo
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Solicitadas',
          data: [20, 35, 30, 25, 40],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Azul
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Radicadas',
          data: [40, 30, 20, 35, 45],
          backgroundColor: 'rgba(255, 206, 86, 0.5)', // Amarillo
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
        {
          label: 'Vencidas',
          data: [35, 20, 25, 20, 30],
          backgroundColor: 'rgba(201, 203, 207, 0.5)',
          borderColor: 'rgba(201, 203, 207, 1)',
          borderWidth: 1
        }
      ]
    };

    // Configuración del gráfico
    const options = {
      responsive: true,
      maintainAspectRatio: false,
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
    <div style={{background: "#fff", padding: "10px", borderRadius: "10px"}}>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default BarChart;