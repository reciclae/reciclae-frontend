import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';
import axios from 'axios';

interface GraphicProps { }

interface EcoPoint {
    metal: number;
    plastic: number;
    paper: number;
    glass: number;
    organic: number;
    electronic: number;
}

const Graphic: React.FC<GraphicProps> = () => {
    const token = localStorage.getItem("auth.token");
    const user = JSON.parse(localStorage.getItem("auth.user") || "{}");
    const [ecoPoints, setEcoPoints] = useState<EcoPoint>({
        metal: 0,
        plastic: 0,
        paper: 0,
        glass: 0,
        organic: 0,
        electronic: 0,
    });

    const fetchData = async () => {
        try {
            const response = await axios.get<EcoPoint>('http://localhost:3001/graphicpoints');
            setEcoPoints(response.data);
        } catch (error) {
            console.error('Erro ao buscar os pontos: ', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            series: [ecoPoints.paper, ecoPoints.glass, ecoPoints.metal, ecoPoints.plastic, ecoPoints.electronic, ecoPoints.organic],
        }));
    }, [ecoPoints]);

    const [state, setState] = useState<GraphicState>({
        series: [0, 0, 0, 0, 0, 0],
        options: {
            chart: {
                type: 'polarArea',
            },
            labels: ['Papel', 'Vidro', 'Metal', 'Plástico', 'Eletrônico', 'Orgânico'],
            colors: ['#0101ff', '#008000', '#eeee09', '#FF0000', '#FFA500', '#8B4513'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    });

    return (
        <ReactApexChart options={state.options} series={state.series} type="polarArea" height="350" />
    );
};

export default Graphic;

interface GraphicState {
    series: number[];
    options: ApexCharts.ApexOptions;
}