import React, { useEffect, useState } from "react";
import {Line} from "react-chartjs-2";
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../redux/actions";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)



export function GraficoTrademarks(){
    const Products = useSelector((state) => state.Clothes)
    const ADIDAS = Products?.filter(product => product.trademark === 'ADIDAS')
    const Nike = Products?.filter(product => product.trademark === 'Nike')
    const Vandalia = Products?.filter(product => product.trademark === 'Vandalia')
    const OldtownPolo = Products?.filter(product => product.trademark === 'Oldtown Polo')
    const Topper = Products?.filter(product => product.trademark === 'Topper')
    const Puma= Products?.filter(product => product.trademark === 'Puma')
    const nike = Products?.filter(product => product.trademark === 'nike')

    console.log('Nike' + Vandalia?.length)

  

const cantidad = [ADIDAS?.length, Nike?.length, Vandalia?.length, OldtownPolo?.length, Topper?.length, Puma?.length, nike?.length]
const trademarks = [
    "Adidas",
    "Nike",
    "Vandalia",
    "Oldtown Polo",
    "Topper",
    "Puma",
    'nike'
  ];

const miData = {
    labels: trademarks,
    datasets: [
        {
            label: 'Trademarks',
            data: cantidad,
            tension: 0.5,
            fill: true,
            borderColor: '#DAEB0F',
            backgroundColor: '#272727',
            pointRadious: 5,
            pointBorderColor: 'white',
            pointBackgroundColor: 'wite'

        }
    ]
};

const misOptions = {

}

    return <Line data={miData} options={misOptions}/>
} 



