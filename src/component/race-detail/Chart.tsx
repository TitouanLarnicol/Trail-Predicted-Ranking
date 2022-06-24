import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { IRunner } from '../../models/IRunner';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['400', '500', '600', '700', '800'];

export const test = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => [1]),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

const RunnerChart = ({ data }: { data: IRunner[] }) => {
    const [chartData, setChartData] = useState(test);

    useEffect(() => {
        const getData = (runners: IRunner[]): any => {
            return {
                labels,
                datasets: [
                    {
                        label: 'Runner\'s itra',
                        data: getContent(runners),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            };
        }
        setChartData(getData(data));
    }, [data])

    const getContent = (list: IRunner[]) => {
        return list.reduce((acc, runner) => {
            switch (true) {
                case runner.pi >= 800:
                    acc[4] = acc[4] + 1
                    break;
                case runner.pi >= 700:
                    acc[3] = acc[3] + 1
                    break;
                case runner.pi >= 600:
                    acc[2] = acc[2] + 1
                    break;
                case runner.pi >= 500:
                    acc[1] = acc[1] + 1
                    break;
                case runner.pi < 500:
                    acc[0] = acc[0] + 1
                    break;
            }
            return acc
        }, [0, 0, 0, 0, 0])
    }

    return (
        <div className='graph'>
            <Bar options={options as any} data={chartData as any} />
        </div>
    )
};

export default RunnerChart;
