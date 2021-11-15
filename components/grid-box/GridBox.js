import styles from '../../styles/Home.module.css';
import { useStore } from '../../context/store-context/StoreContext';
import Highcharts from 'highcharts/'
import HighchartsReact from 'highcharts-react-official';

const options = {
    responsive: true,
    class: 'highchart',
    maintainAspectRatio: false,
    chart: {
        type: 'spline',
        height: '100%'
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
    series: [{
        showInLegend: false,
        name: 'Hestavollane',
        description:'',
        data: [
            3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
            6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
            9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
            10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
            10.1
        ]

    }, {
        name: 'Vik',
        color:'yellow',
        description:null,
        data: [
            0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
            0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
            0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
            0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
            1.5
        ]
    }],
    yAxis: {
        className: styles['.highcharts-grid-line'],
        gridLineWidth: 2,
        minorGridLineWidth: 0,
        title: null,
        labels: {
            format: '{}'
        }
    },
    xAxis: {
        gridLineWidth: 2,
        minorGridLineWidth: 0,
        title: null,
        labels: {
            format: '{}'
        }
    }
};

const GridBox = () => {
    const { commitData=[] } = useStore();
    let series = [];
    if(!commitData?.length){
        series = [{ data: [] }]
    }
    const newOptions = {...options, series}
    console.log(newOptions);
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newOptions}
        />
    )
}

export default GridBox;