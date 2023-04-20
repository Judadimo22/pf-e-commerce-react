import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getClothes } from '../../redux/actions';

ChartJS.register(ArcElement, Tooltip, Legend);



export function GraficoCategories() {
  const dispatch = useDispatch()
  const Products = useSelector((state) => state.Clothes)
  const men = Products?.filter(product => product.categorie === 'men')
  const women = Products?.filter(product => product.categorie === 'women')
  const kid = Products?.filter(product => product.categorie === 'kid')
  useEffect(() => {
    dispatch(getClothes());
  }, []);

  const data = {
    labels: ["Men", "Women", "kid"],
    datasets: [
      {
        label: 'Total',
        data: [men?.length, women?.length, kid?.length],
        backgroundColor: [
          '#272727',
          '#FFF',
          '#DAEB0F',
        ],
        borderColor: [
          '#272727',
          '#cecece',
          '#DAEB0F',
        ],
        boxShadow: [
          '#272727'
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}
