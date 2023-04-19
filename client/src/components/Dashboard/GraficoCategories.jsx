import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["men", "women", "kid"],
  datasets: [
    {
      label: 'Categories',
      data: [12, 19, 3],
      backgroundColor: [
        '#F2F2F2',
        '#272727',
        '#DAEB0F',
      ],
      borderColor: [
        '#DAEB0F',
        '#DAEB0F',
        '#DAEB0F',
      ],
      borderWidth: 1,
    },
  ],
};

export function GraficoCategories() {
  return <Pie data={data} />;
}
