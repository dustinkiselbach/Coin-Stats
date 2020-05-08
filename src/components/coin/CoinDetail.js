import React, { Fragment } from 'react'
import classnames from 'classnames'
import Moment from 'react-moment'

const CoinDetail = ({ ticker, metric }) => {
  return (
    <section className='coin-detail'>
      {ticker !== null ? (
        <Fragment>
          <h1 className='coin-detail__symbol title-primary'>{ticker.symbol}</h1>
          <h2
            className={classnames('coin-detail__change', {
              txtgreen: ticker[metric].price_change_pct > 0,
              txtred: ticker[metric].price_change_pct < 0
            })}
          >
            <span>% Change: </span>
            {ticker[metric].price_change_pct}
          </h2>
          <ul className='coin-detail__list'>
            <li className='coin-detail__price'>
              <strong>Current Price:</strong> {ticker.price} USD
            </li>
            <li className='coin-detail__time'>
              <strong>Time:</strong> <Moment>{ticker.price_timestamp}</Moment>
            </li>
            <li className='coin-detail__rank'>
              <strong>Rank:</strong> {ticker.rank}
            </li>
          </ul>

          <img src={ticker.logo_url} alt='' className='coin-detail__logo' />
        </Fragment>
      ) : (
        <div className='fart'></div>
      )}
    </section>
  )
}

export default CoinDetail
