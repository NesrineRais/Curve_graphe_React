import React, { useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Chart = () => {
    useEffect(() => {
        axios.get('/data.csv')
            .then((res => {
                console.log(res)
            }))


    }, [])

    return (
        <div>

        </div>
    )
}

export default Chart;