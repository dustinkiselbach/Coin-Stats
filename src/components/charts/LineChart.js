import React, { Fragment } from 'react'
import moment from 'moment'
import { Line } from 'react-chartjs-2'

const LineGraph = ({ tickerHistory, color }) => {
  let data
  if (tickerHistory) {
    data = {
      labels: tickerHistory.timestamps.map(time =>
        moment(time).format('YYYY-MM-DD h:mm a')
      ),
      datasets: [
        {
          label: tickerHistory.currency,
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#eee',
          borderColor: color,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          color: '#eee',
          data: tickerHistory.prices
        }
      ]
    }
  }

  return (
    <Fragment>
      {tickerHistory !== null ? <Line data={data} /> : <div>fart</div>}
    </Fragment>
  )
}

export default LineGraph
