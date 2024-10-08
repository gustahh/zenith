// src/components/HumorGrafico.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar componentes do ChartJS
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

interface HumorData {
  dia: string;
  humor: number;
}

interface GraficoHumorSemanalProps {
  dados: HumorData[];
}

const GraficoHumorSemanal: React.FC<GraficoHumorSemanalProps> = ({ dados }) => {
  const emotions = ['Muito Triste', 'Triste', 'Neutro', 'Feliz', 'Muito Feliz'];

  const data = {
    labels: dados.map(entry => entry.dia),
    datasets: [
      {
        label: 'Humor',
        data: dados.map(entry => entry.humor),
        fill: false,
        backgroundColor: 'rgba(0,0,0,0)', // Cor de fundo dos pontos com opacidade 70%
        borderColor: 'rgba(0,0,0,0.7)',    // Cor da linha preta com opacidade 70%
        pointBackgroundColor: 'rgba(0,0,0,0.7)', // Cor dos pontos com opacidade 70%
        pointBorderColor: '#fff',                 // Cor da borda dos pontos
        pointHoverBackgroundColor: '#fff',        // Cor de fundo dos pontos quando hover
        pointHoverBorderColor: 'rgba(0,0,0,0.7)'  // Cor da borda dos pontos quando hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,  // Ajustar a posição para um tipo literal específico
      },
      title: {
        display: true,
        text: 'Seu humor semanal',
        color: '#333',
      },
    },
    scales: {
      y: {
        type: 'category' as const, // Ajustar o tipo para um tipo literal específico
        labels: emotions,
        reverse: true,
        ticks: {
          color: '#333', // Cor dos textos do eixo Y
        },
      },
      x: {
        ticks: {
          color: '#333' // Cor dos textos do eixo X
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GraficoHumorSemanal;
