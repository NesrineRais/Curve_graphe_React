import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { csv } from 'd3';
// const labels = [

//     '01/01/2021',
//     '01/02/2021',
//     '01/03/2021',
//     '01/04/2021',

// ];

const Chart = () => {

    const [dataCsv, setData] = useState([])
    const width = "900px";


    useEffect(() => {

        csv('/data.csv').then(setData);


    }, [])

    const labels = Array.from(new Set(dataCsv.map((info) => info.date)))
    console.log(dataCsv)
    const ventes = Array.from(new Set(dataCsv.map((vente) => vente.ventes)))
    console.log(ventes)

    const data = {
        labels: labels,
        datasets: [{
            label: 'Pc',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: ventes,
        }]
    };

    return (
        < div >
            <div style={{ position: "relative", margin: "auto", width: "500px", height: "500px" }}>
                <Line

                    options={{ maintainAspectRatio: false }}
                    data={data}

                />
            </div>


        </div >
    )
}

export default Chart;