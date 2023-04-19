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

var cantidad = [0, 10, 2, 30, 5, 8, 60]
const types = ["shirts", "pants", "hoodies", "hats"];

var miData = {
    labels: types,
    datasets: [
        {
            label: 'Types',
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

export function GraficoTypes(){
    return <Line data={miData} options={misOptions}/>
} 
