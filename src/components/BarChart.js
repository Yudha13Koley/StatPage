import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'

export default function BarChart(props) {
    let inProgressData = [];
    let onHoldData = [];
    let closedData = [];
    let withdrawnData = [];
    let openData = [];
    const data = {
        'Jan': [7, 11, 13, 10, 8],
        'Feb': [2, 4, 5, 6, 0],
        'Mar': [5, 4, 1, 6, 7],
        'Apr': [2, 8, 5, 10, 9],
        'May': [12, 4, 0, 6, 10],
        'Jun': [7, 8, 8, 6, 9],
        'Jul': [0, 8, 5, 8, 4],
        'Aug': [1, 6, 6, 7, 6],
        'Sep': [21, 9, 2, 3, 9],
        'Oct': [3, 4, 13, 7, 1],
        'Nov': [5, 3, 15, 13, 18],
        'Dec': [8, 20, 4, 5, 8]
    }
    const getOpenValues = (data) => {
        let i = 0;
        Object.keys(data).forEach(mon => {
            openData[i] = data[mon][0];
            i++;
        })
        return openData;
    }
    const getInProgressValues = (data) => {
        let i = 0;
        Object.keys(data).forEach(mon => {
            inProgressData[i] = data[mon][1];
            i++;
        })
        return inProgressData;
    }
    const getOnHoldValues = (data) => {
        let i = 0;
        Object.keys(data).forEach(mon => {
            onHoldData[i] = data[mon][2];
            i++;
        })
        return onHoldData;
    }
    const getClosedValues = (data) => {
        let i = 0;
        Object.keys(data).forEach(mon => {
            closedData[i] = data[mon][3];
            i++;
        })
        return closedData;
    }
    const getWithdrawnValues = (data) => {
        let i = 0;
        Object.keys(data).forEach(mon => {
            withdrawnData[i] = data[mon][4];
            i++;
        })
        return withdrawnData;
    }


    return (
        <Bar data={
            {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: '0pen',
                    data: getOpenValues(data),
                    backgroundColor: 'green'
                },
                {
                    label: 'In Progress',
                    data: getInProgressValues(data),
                    backgroundColor: 'yellow'
                },
                {
                    label: 'On Hold',
                    data: getOnHoldValues(data),
                    backgroundColor: 'red'
                },
                {
                    label: 'Closed',
                    data: getClosedValues(data),
                    backgroundColor: 'grey'
                },
                {
                    label: 'Withdrawn',
                    data: getWithdrawnValues(data),
                    backgroundColor: 'blue'
                },
                ]
            }
        }
            width={600} height={400} options={{
                plugins: {
                    title: {
                        display: true,
                        text: props.cluster + ' Status Thourghout The Year ' + props.year
                    },
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true
                    }
                }
            }}
        />
    )
}
