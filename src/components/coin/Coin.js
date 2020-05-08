import React, { useContext, useEffect, useState, Fragment } from 'react'
import CoinDetail from './CoinDetail'
import CoinBtns from './CoinBtns'
import CoinInfo from './CoinInfo'
import CoinContext from '../../context/coin/coinContext'
import LineChart from '../charts/LineChart'
import Spinner from '../common/Spinner'
import moment from 'moment'

const Coin = ({ match }) => {
  const [date] = useState(
    moment()
      .utc()
      .subtract(1, 'days')
      .format('YYYY-MM-DDTHH')
  )

  const [metric, setMetric] = useState('1d')

  const [color, setColor] = useState('#5cb85c')

  const coinContext = useContext(CoinContext)
  const {
    loading,
    ticker,
    tickerHistory,
    metaData,
    getTicker,
    getMetaData,
    getTickerHistory
  } = coinContext

  useEffect(() => {
    getTicker(match.params.id)
    getTickerHistory(match.params.id, date)
    getMetaData(match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [])

  const colorChecker = metric => {
    if (ticker[metric].price_change > 0) {
      return '#5cb85c'
    } else {
      return '#d9534f'
    }
  }

  const getDate = time => {
    let num = parseInt(time.slice(0, -1))
    let interval = time.slice(-1)

    if (interval === 'h') {
      return moment()
        .utc()
        .subtract(num, 'hour')
        .format('YYYY-MM-DD')
    } else {
      return moment()
        .utc()
        .subtract(num, 'days')
        .format('YYYY-MM-DDTHH')
    }
  }

  // Controlling buttons behavior on to get different information
  const onClick = e => {
    e.preventDefault()
    // setting the detail
    setMetric(e.target.textContent)

    // setting the color
    const color = colorChecker(e.target.textContent)
    setColor(color)

    // setting the graph
    const date = getDate(e.target.textContent)
    getTickerHistory(match.params.id, date)
  }

  return (
    <Fragment>
      <section className='coin'>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <CoinDetail ticker={ticker} metric={metric} />
            <LineChart tickerHistory={tickerHistory} color={color} />
            <CoinBtns onClick={onClick} color={color} metric={metric} />
            <CoinInfo metaData={metaData} />{' '}
          </Fragment>
        )}
      </section>
    </Fragment>
  )
}

export default Coin
