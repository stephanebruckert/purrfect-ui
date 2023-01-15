import ReactApexChart from 'react-apexcharts'
import { FC } from 'react'

type Props = {
    counts: number[],
    labels: string[],
}

const Chart: FC<Props> = ({counts, labels}) => {
    const options = {
        labels: Array.from(labels)
    };

    const series = [
        {
            name: "Products totals",
            data: counts
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