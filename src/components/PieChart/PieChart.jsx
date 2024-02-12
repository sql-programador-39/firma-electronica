import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);
  const myPieChart = useRef(null);  // Referencia para almacenar el gráfico

  useEffect(() => {
    // Datos de ejemplo
    const data = {
      labels: ['Afiliaciones', 'Actualización de datos', 'Solicitud créditos'],
      datasets: [{
        data: [30, 20, 25],
        // green, orange, blue
        backgroundColor: ['rgba(76, 175, 80, 0.5)', 'rgba(230, 96, 21, 0.5)', 'rgba(33, 150, 243, 0.5)'],
        borderColor: ['rgba(76, 175, 80, 1)', 'rgba(230, 96, 21, 1)', 'rgba(33, 150, 243, 1)'],
        borderWidth: 1,
      }]
    };

    // Configuración del gráfico
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    // Destruir el gráfico anterior si existe
    if (myPieChart.current) {
      myPieChart.current.destroy();
    }

    // Crear instancia de gráfico de tipo "pie"
    const ctx = chartRef.current.getContext('2d');
    myPieChart.current = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });

    // Limpiar al desmontar el componente
    return () => {
      if (myPieChart.current) {
        myPieChart.current.destroy();
      }
    };
  }, []); // Se ejecuta solo al montar/desmontar el componente

  return (
    <div style={{background: "#fff", padding: "10px", borderRadius: "10px"}}>
      <canvas ref={chartRef} width="33.33%" height="100%"></canvas>
    </div>
  );
};

export default PieChart;