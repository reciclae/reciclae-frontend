import React from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

interface GraphicState {
    series: number[];
    options: ApexCharts.ApexOptions;
}

class Graphic extends React.Component<{}, GraphicState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            series: [40, 40, 50, 17, 15, 15],
            options: {
                chart: {
                    type: 'polarArea',
                },
                labels: ['Papel', 'Vidro', 'Metal', 'Plástico', 'Pilha & Bateria', 'Orgânico'],
                colors: ['#0101ff', '#008000', '#eeee09', '#FF0000', '#FFA500', '#8B4513'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    }

    render() {
        return (
            <ReactApexChart options={this.state.options} series={this.state.series} type="polarArea" height="350" />
        );
    }
}

export default Graphic;