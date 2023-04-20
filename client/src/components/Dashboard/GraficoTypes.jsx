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
import { useSelector } from "react-redux";

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



export function GraficoTypes(){

const Products = useSelector((state) => state.Clothes)
const shirts = Products?.filter(product => product.type === 'shirts')
const pants = Products?.filter(product => product.type === 'pants')
const hoodies = Products?.filter(product => product.type === 'hoodies')
const hats= Products?.filter(product => product.type === 'hats')
console.log(shirts)
 
var cantidad = [shirts?.length, pants?.length, hoodies?.length, hats?.length]
const types = ["Shirts", "Pants", "Hoodies", "Hats"];

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
    return <Line data={miData} options={misOptions}/>
} 
