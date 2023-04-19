import React from "react";
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

var cantidad = [0, 10, 20, 0, 40, 50, 60]
var trademarks = [
    "ADIDAS",
    "Nike",
    "Vandalia",
    "Oldtown Polo",
    "Topper",
    "Puma",
  ];

var miData = {
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

var misOptions = {

}

export function GraficoTrademarks(){
    return <Line data={miData} options={misOptions}/>
} 



