import ReactApexChart from 'react-apexcharts'
import { FC } from 'react'

type Props = {
}

const Chart: FC<Props> = ({}) => {
    const options = {
        chart: {
            height: 350,
            zoom: {
                enabled: true
            }
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
    };

    const series = [
        {
            name: "Bar",
            data: [31, 40, 28, 51, 42, 109, 100],

        },

    ];

    return (
        <ReactApexChart
            type="bar"
            options={options}
            series={series}
            height={350}
        />
    );
};

export default Chart;