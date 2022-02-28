import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

export default function PieChart(props) {
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
    const getValuesInMonth = (month) => {
        if (typeof month === 'undefined' || month === '') {
            return [0, 0, 0, 0, 0];
        }
        else if (month in data) {
            return data[month];
        }
    }
    return (
        <div>
            <Pie data={{
                labels: ['Open', 'In Progress', 'OnHold', 'Closed', 'Withdrawn'],
                datasets: [
                    {
                        label: `${props.month}`,
                        data: [getValuesInMonth(props.month)[0], getValuesInMonth(props.month)[1], getValuesInMonth(props.month)[2], getValuesInMonth(props.month)[3], getValuesInMonth(props.month)[4]],
                        backgroundColor: ['green', 'yellow', 'red', 'grey', 'blue']
                    },
                ]
            }} options={{
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Status of Tickets in ' + `${props.month}`
                    },
                },

                maintainAspectRaio: true

            }} />
        </div>
    )
}
