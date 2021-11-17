import { useStore } from '../../context/store-context/StoreContext';
import Highcharts from 'highcharts/'
import HighchartsReact from 'highcharts-react-official';

const options = {
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        marker: {
                            radius: 2.5
                        }
                    }
                }
            }
        }]
    },
    maintainAspectRatio: false,
    chart: {
        type: 'spline',
        animation: true,
    },
    legend: {
        enabled: false
    },
    title: {
        text: null
    },
    credits: {
        enabled: false
    },
    tooltip:{
        headerShape:'circle'
    },
    series: [],
    plotOptions: {  
        series: {
            marker: {
                radius: 5,
                symbol: 'circle'
            },
            dataGrouping: {
                enabled: true,
                forced: true,
            }
        }
    },
    yAxis: {
        title: null,
        labels: {
            format: '{}'
        },
        max: 100,
        min: 0,
        tickInterval: 1,
        lineWidth: 2,
        lineColor: 'grey',
    },
    xAxis: {
        minorGridLineWidth: 0,
        title: null,
        labels: {
            format: '{}'
        },
        min: 0,
        tickInterval: 1,
        lineColor: 'grey',
        lineWidth: 2,
        categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    }
};

const GridBox = () => {
    const { commitData=[] } = useStore();
    let series = [];
    series = [...commitData];
    if(!commitData?.length){
        series = [{ data: [] }]
    }
    const newOptions = {...options, series}
    return (
            <HighchartsReact
            highcharts={Highcharts}
            options={newOptions}
            />

    )
}

export default GridBox;